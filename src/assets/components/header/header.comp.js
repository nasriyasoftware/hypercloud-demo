import { Component } from "@nasriya/hypercloud";
import path from 'path';

const header = new Component('header');
header.template.path.set(path.join(import.meta.dirname, 'header.ejs'));

const defaultLocals = {
    logo: { alt: 'Nasriya Software Logo' },
    nav: [{ label: 'Home', href: '/' }, { label: 'Community', href: '/support/community' }, { label: 'Contact', href: '/support/contact' }],
    auth: { label: 'Login / Signup' }
}

header.locals.multilingual.set({
    default: defaultLocals,
    ar: {
        logo: { alt: 'شعار ناصرية سوفتوير' },
        nav: [{ label: 'الرئيسة', href: '/' }, { label: 'المجتمع', href: '/support/community' }, { label: 'إتصل بنا', href: '/support/contact' }],
        auth: { label: 'تسجيل الدخول / إنشاء حساب' }
    }
})

export default header;