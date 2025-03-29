import fs from 'fs';
import path from 'path';
import { SitemapStream, streamToPromise } from 'sitemap';


(async () => {
    const sitemap = new SitemapStream({
        hostname: 'https://reasonstoswallow.com',
    });

    const RouteConfig = [
        {path: "/"},
        {path: "/convince-me"},
        {path: "/view/:id", dynamic: true},
        {path: "/propose"},
    ]

    for (const route of RouteConfig) {
        if (!route.dynamic) {
            sitemap.write({ url: route.path });
        }
    }

    sitemap.end();

    const xml = await streamToPromise(sitemap);
    fs.writeFileSync(path.resolve( 'public/sitemap.xml'), xml.toString());
})();
