export default {

        head: {
            title: 'Taaskly - Everything you need in one place',
            htmlAttrs: { lang: 'en' },
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    'http-equiv': 'Content-Security-Policy',
                    content: 'upgrade-insecure-requests'
                },
                {
                    name: 'title',
                    content: 'Taaskly - Everything you need in one place'
                },
                {
                    name: 'description',
                    content: 'Find the right products and services at the right time.'
                },
                {
                    name: 'twitter:title',
                    content: 'Taaskly - Everything you need in one place'
                },
                { name: 'twitter:image', content: '/favicon.svg' },
                {
                    name: 'twitter:description',
                    content: 'Find the right products and services at the right time.'
                },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:site', content: '@taaskly' },
                { name: 'twitter:creator', content: '@taaskly' },
                {
                    property: 'og:title',
                    content: 'Taaskly - Everything you need in one place'
                },
                { property: 'og:type', content: 'site' },
                { property: 'og:url', content: 'https://taaskly.xyz/' },
                { property: 'og:image', content: '/favicon.svg' },
                { property: 'og:site_name', content: 'Taaskly' },
                {
                    property: 'og:description',
                    content: 'Find the right products and services at the right time.'
                },

                { name: 'format-detection', content: 'telephone=no' }
            ],
            script: [
            {
                hid: 'google-tag-manager',
                children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NGSPMMW');`,
                type: 'text/javascript',
                defer: true,
                async: true

            },
            {
                hid: 'microsoft-clarity',
                children: `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "gx95koxovd");`,
                type: 'text/javascript',
                defer: true,
                async: true

            }
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
                { rel: 'manifest', href: '/manifest.webmanifest' },
                {
                    href: 'https://fonts.googleapis.com',
                    rel: 'preconnect'
                },
                {
                    href: 'https://fonts.gstatic.com',
                    rel: 'preconnect',
                    crossorigin: true
                },
                {
                    href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800;900&display=swap',
                    rel: 'stylesheet',
                    defer: true,
                    async: true
                }
            ]
        }

}
