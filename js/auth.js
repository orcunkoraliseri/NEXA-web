/* NEXA-web access gate (Level A).
 * Design: docs_implementation/passwordSystem/implementation_plan.md, section 4.5.
 * Loaded first in the <head> of every page, before the stylesheet, so a
 * signed-out visitor is sent to login.html before the page paints.
 * The gate is skipped when AUTH_ENABLED is false, when AUTH_URL is empty, and
 * when the site is opened from disk (file:), so the offline copy keeps working.
 */
(function () {
    'use strict';

    // Rollback switch: false turns the gate off on every page.
    var AUTH_ENABLED = true;
    // Google Apps Script web app /exec URL (lab account, s05). The only
    // external request the site makes.
    var AUTH_URL = 'https://script.google.com/macros/s/AKfycbyYC7dDlzvXYSLU6WtvMJVQ8i1yuIqnAvyxpHBMJwuMLivGMQYByqHXejHvrqSKfCk7/exec';

    var SESSION_KEY = 'nexaAuthSession';
    var DEVICE_KEY = 'nexaDeviceId';
    var SESSION_DAYS = 7;

    function read(key) {
        try { return localStorage.getItem(key); } catch (e) { return null; }
    }
    function write(key, value) {
        try { localStorage.setItem(key, value); return true; } catch (e) { return false; }
    }
    function remove(key) {
        try { localStorage.removeItem(key); } catch (e) { /* storage blocked */ }
    }

    function getSession() {
        try {
            var s = JSON.parse(read(SESSION_KEY));
            if (s && s.email && s.expires > Date.now()) return s;
        } catch (e) { /* malformed entry */ }
        return null;
    }

    // Browser equivalent of the URDM HWID (section 4.4): a random ID kept in
    // this browser, bound to the account on first sign-in.
    function getDeviceId() {
        var id = read(DEVICE_KEY);
        if (id) return id;
        if (window.crypto && crypto.randomUUID) {
            id = crypto.randomUUID();
        } else {
            var b = new Uint8Array(16);
            crypto.getRandomValues(b);
            id = Array.prototype.map.call(b, function (x) { return ('0' + x.toString(16)).slice(-2); }).join('');
        }
        write(DEVICE_KEY, id);
        return id;
    }

    // Only a page of this site may be the return target, never another origin.
    function safeNext(next) {
        return /^[A-Za-z0-9_-]+\.html([?#].*)?$/.test(next || '') ? next : 'index.html';
    }

    function signIn(email, password) {
        return fetch(AUTH_URL, {
            method: 'POST',
            // text/plain keeps this a simple request: Apps Script cannot
            // answer a CORS preflight.
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify({ email: email, password: password, deviceId: getDeviceId() })
        }).then(function (res) {
            if (!res.ok) throw new Error('http');
            return res.json();
        }).then(function (result) {
            if (result && result.status === 'success') {
                var stored = write(SESSION_KEY, JSON.stringify({
                    email: email,
                    expires: Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000
                }));
                if (!stored) {
                    return { status: 'error', message: 'This browser blocks site data, which sign-in needs. Allow site data for this page and try again.' };
                }
            }
            return result;
        });
    }

    function signOut() {
        remove(SESSION_KEY);
        location.href = 'login.html';
    }

    var active = AUTH_ENABLED && AUTH_URL !== '' && location.protocol !== 'file:';
    var page = location.pathname.split('/').pop() || 'index.html';
    var onLogin = page === 'login.html';

    window.NEXA_AUTH = {
        active: active,
        signIn: signIn,
        signOut: signOut,
        session: getSession,
        safeNext: safeNext
    };

    if (!active || onLogin) return;

    if (!getSession()) {
        document.documentElement.style.visibility = 'hidden';
        location.replace('login.html?next=' + encodeURIComponent(page + location.search + location.hash));
        return;
    }

    // Sign out sits with the other footer links on every page that has a footer.
    document.addEventListener('DOMContentLoaded', function () {
        var footer = document.querySelector('footer');
        if (!footer) return;
        var link = document.createElement('a');
        link.className = 'footer-doc-link';
        link.href = 'login.html';
        link.textContent = 'Sign out';
        link.addEventListener('click', function (e) {
            e.preventDefault();
            signOut();
        });
        footer.appendChild(link);
    });
})();
