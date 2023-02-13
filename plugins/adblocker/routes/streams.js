/// <reference path="index.d.ts" />

const { ipcRenderer } = require("electron");

const multiIncludes = (/**@type {string}*/ str, /**@type {string[]}*/ strs) =>
    strs.every((s) => str.includes(s));

const cronchy = {
    getStreams: async function (id) {
        const link = `https://cronchy.consumet.stream/episode/${id}`;
        const res = await ipcRenderer.invoke("http-fetch", link);
        return JSON.parse(res);
    },
};

const /**@type {Route}*/ route = {
        predicate: (xhr, json) =>
            multiIncludes(xhr.responseURL, ["v2/cms/videos", "/streams"]),
        handler: async (xhr, json) => {
            const id = xhr.responseURL
                .split("?")[0]
                .match(/videos\/(.*?)\/streams/)[1];
            if (id == undefined) return;

            xhr.status = 200;
            xhr.statusText = "OK";

            const streams = await cronchy.getStreams(id);

            Object.assign(json, {
                total: 1,
                data: [],
                meta: {
                    closed_captions: {},
                    captions: {},
                    subtitles: {},
                    bifs: [],
                    versions: [
                        {
                            audio_locale: "ja-JP",
                            guid: "GRE5K0K36",
                            is_premium_only: false,
                            media_guid: "G9XF2004K",
                            original: true,
                            season_guid: "G609GZG26",
                            variant: "",
                        },
                    ],
                    media_id: id,
                    audio_locale: "ja-JP",
                },
            });

            for (const subtitle of streams.subtitles) {
                json.meta.subtitles[subtitle.lang] = {
                    locale: subtitle.lang,
                    url: subtitle.url,
                    format: subtitle.format,
                };
            }

            ipcRenderer.send("log-to-console", json);
        },
    };

module.exports = route;

let a = {
    total: 1,
    data: [
        {
            drm_adaptive_dash: {
                "": {
                    hardsub_locale: "",
                    url: "",
                },
                "ar-SA": {
                    hardsub_locale: "ar-SA",
                    url: "",
                },
                "de-DE": {
                    hardsub_locale: "de-DE",
                    url: "",
                },
                "en-US": {
                    hardsub_locale: "en-US",
                    url: "",
                },
                "es-419": {
                    hardsub_locale: "es-419",
                    url: "",
                },
                "es-ES": {
                    hardsub_locale: "es-ES",
                    url: "",
                },
                "fr-FR": {
                    hardsub_locale: "fr-FR",
                    url: "",
                },
                "it-IT": {
                    hardsub_locale: "it-IT",
                    url: "",
                },
                "pt-BR": {
                    hardsub_locale: "pt-BR",
                    url: "",
                },
                "ru-RU": {
                    hardsub_locale: "ru-RU",
                    url: "",
                },
            },
            drm_multitrack_adaptive_hls_v2: {
                "": {
                    hardsub_locale: "",
                    url: "",
                },
                "ar-SA": {
                    hardsub_locale: "ar-SA",
                    url: "",
                },
                "de-DE": {
                    hardsub_locale: "de-DE",
                    url: "",
                },
                "en-US": {
                    hardsub_locale: "en-US",
                    url: "",
                },
                "es-419": {
                    hardsub_locale: "es-419",
                    url: "",
                },
                "es-ES": {
                    hardsub_locale: "es-ES",
                    url: "",
                },
                "fr-FR": {
                    hardsub_locale: "fr-FR",
                    url: "",
                },
                "it-IT": {
                    hardsub_locale: "it-IT",
                    url: "",
                },
                "pt-BR": {
                    hardsub_locale: "pt-BR",
                    url: "",
                },
                "ru-RU": {
                    hardsub_locale: "ru-RU",
                    url: "",
                },
            },
            multitrack_adaptive_hls_v2: {
                "": {
                    hardsub_locale: "",
                    url: "",
                },
                "ar-SA": {
                    hardsub_locale: "ar-SA",
                    url: "",
                },
                "de-DE": {
                    hardsub_locale: "de-DE",
                    url: "",
                },
                "en-US": {
                    hardsub_locale: "en-US",
                    url: "",
                },
                "es-419": {
                    hardsub_locale: "es-419",
                    url: "",
                },
                "es-ES": {
                    hardsub_locale: "es-ES",
                    url: "",
                },
                "fr-FR": {
                    hardsub_locale: "fr-FR",
                    url: "",
                },
                "it-IT": {
                    hardsub_locale: "it-IT",
                    url: "",
                },
                "pt-BR": {
                    hardsub_locale: "pt-BR",
                    url: "",
                },
                "ru-RU": {
                    hardsub_locale: "ru-RU",
                    url: "",
                },
            },
            vo_drm_adaptive_hls: {
                "": {
                    hardsub_locale: "",
                    url: "",
                },
                "ar-SA": {
                    hardsub_locale: "ar-SA",
                    url: "",
                },
                "de-DE": {
                    hardsub_locale: "de-DE",
                    url: "",
                },
                "en-US": {
                    hardsub_locale: "en-US",
                    url: "",
                },
                "es-419": {
                    hardsub_locale: "es-419",
                    url: "",
                },
                "es-ES": {
                    hardsub_locale: "es-ES",
                    url: "",
                },
                "fr-FR": {
                    hardsub_locale: "fr-FR",
                    url: "",
                },
                "it-IT": {
                    hardsub_locale: "it-IT",
                    url: "",
                },
                "pt-BR": {
                    hardsub_locale: "pt-BR",
                    url: "",
                },
                "ru-RU": {
                    hardsub_locale: "ru-RU",
                    url: "",
                },
            },
            adaptive_dash: {
                "": {
                    hardsub_locale: "",
                    url: "",
                },
                "ar-SA": {
                    hardsub_locale: "ar-SA",
                    url: "",
                },
                "de-DE": {
                    hardsub_locale: "de-DE",
                    url: "",
                },
                "en-US": {
                    hardsub_locale: "en-US",
                    url: "",
                },
                "es-419": {
                    hardsub_locale: "es-419",
                    url: "",
                },
                "es-ES": {
                    hardsub_locale: "es-ES",
                    url: "",
                },
                "fr-FR": {
                    hardsub_locale: "fr-FR",
                    url: "",
                },
                "it-IT": {
                    hardsub_locale: "it-IT",
                    url: "",
                },
                "pt-BR": {
                    hardsub_locale: "pt-BR",
                    url: "",
                },
                "ru-RU": {
                    hardsub_locale: "ru-RU",
                    url: "",
                },
            },
            drm_download_dash: {
                "": {
                    hardsub_locale: "",
                    url: "",
                },
            },
            urls: {
                "": {
                    hardsub_locale: "",
                    url: "",
                },
            },
            vo_adaptive_hls: {
                "": {
                    hardsub_locale: "",
                    url: "",
                },
                "ar-SA": {
                    hardsub_locale: "ar-SA",
                    url: "",
                },
                "de-DE": {
                    hardsub_locale: "de-DE",
                    url: "",
                },
                "en-US": {
                    hardsub_locale: "en-US",
                    url: "",
                },
                "es-419": {
                    hardsub_locale: "es-419",
                    url: "",
                },
                "es-ES": {
                    hardsub_locale: "es-ES",
                    url: "",
                },
                "fr-FR": {
                    hardsub_locale: "fr-FR",
                    url: "",
                },
                "it-IT": {
                    hardsub_locale: "it-IT",
                    url: "",
                },
                "pt-BR": {
                    hardsub_locale: "pt-BR",
                    url: "",
                },
                "ru-RU": {
                    hardsub_locale: "ru-RU",
                    url: "",
                },
            },
            drm_adaptive_hls: {
                "": {
                    hardsub_locale: "",
                    url: "",
                },
                "ar-SA": {
                    hardsub_locale: "ar-SA",
                    url: "",
                },
                "de-DE": {
                    hardsub_locale: "de-DE",
                    url: "",
                },
                "en-US": {
                    hardsub_locale: "en-US",
                    url: "",
                },
                "es-419": {
                    hardsub_locale: "es-419",
                    url: "",
                },
                "es-ES": {
                    hardsub_locale: "es-ES",
                    url: "",
                },
                "fr-FR": {
                    hardsub_locale: "fr-FR",
                    url: "",
                },
                "it-IT": {
                    hardsub_locale: "it-IT",
                    url: "",
                },
                "pt-BR": {
                    hardsub_locale: "pt-BR",
                    url: "",
                },
                "ru-RU": {
                    hardsub_locale: "ru-RU",
                    url: "",
                },
            },
            drm_download_hls: {
                "": {
                    hardsub_locale: "",
                    url: "",
                },
            },
            vo_adaptive_dash: {
                "": {
                    hardsub_locale: "",
                    url: "",
                },
                "ar-SA": {
                    hardsub_locale: "ar-SA",
                    url: "",
                },
                "de-DE": {
                    hardsub_locale: "de-DE",
                    url: "",
                },
                "en-US": {
                    hardsub_locale: "en-US",
                    url: "",
                },
                "es-419": {
                    hardsub_locale: "es-419",
                    url: "",
                },
                "es-ES": {
                    hardsub_locale: "es-ES",
                    url: "",
                },
                "fr-FR": {
                    hardsub_locale: "fr-FR",
                    url: "",
                },
                "it-IT": {
                    hardsub_locale: "it-IT",
                    url: "",
                },
                "pt-BR": {
                    hardsub_locale: "pt-BR",
                    url: "",
                },
                "ru-RU": {
                    hardsub_locale: "ru-RU",
                    url: "",
                },
            },
            adaptive_hls: {
                "": {
                    hardsub_locale: "",
                    url: "",
                },
                "ar-SA": {
                    hardsub_locale: "ar-SA",
                    url: "",
                },
                "de-DE": {
                    hardsub_locale: "de-DE",
                    url: "",
                },
                "en-US": {
                    hardsub_locale: "en-US",
                    url: "",
                },
                "es-419": {
                    hardsub_locale: "es-419",
                    url: "",
                },
                "es-ES": {
                    hardsub_locale: "es-ES",
                    url: "",
                },
                "fr-FR": {
                    hardsub_locale: "fr-FR",
                    url: "",
                },
                "it-IT": {
                    hardsub_locale: "it-IT",
                    url: "",
                },
                "pt-BR": {
                    hardsub_locale: "pt-BR",
                    url: "",
                },
                "ru-RU": {
                    hardsub_locale: "ru-RU",
                    url: "",
                },
            },
            download_dash: {
                "": {
                    hardsub_locale: "",
                    url: "",
                },
            },
            download_hls: {
                "": {
                    hardsub_locale: "",
                    url: "",
                },
            },
            vo_drm_adaptive_dash: {
                "": {
                    hardsub_locale: "",
                    url: "",
                },
                "ar-SA": {
                    hardsub_locale: "ar-SA",
                    url: "",
                },
                "de-DE": {
                    hardsub_locale: "de-DE",
                    url: "",
                },
                "en-US": {
                    hardsub_locale: "en-US",
                    url: "",
                },
                "es-419": {
                    hardsub_locale: "es-419",
                    url: "",
                },
                "es-ES": {
                    hardsub_locale: "es-ES",
                    url: "",
                },
                "fr-FR": {
                    hardsub_locale: "fr-FR",
                    url: "",
                },
                "it-IT": {
                    hardsub_locale: "it-IT",
                    url: "",
                },
                "pt-BR": {
                    hardsub_locale: "pt-BR",
                    url: "",
                },
                "ru-RU": {
                    hardsub_locale: "ru-RU",
                    url: "",
                },
            },
        },
    ],
    meta: {
        closed_captions: {},
        captions: {},
        subtitles: {
            "ar-SA": {
                format: "ass",
                locale: "ar-SA",
                url: "",
            },
            "de-DE": {
                format: "ass",
                locale: "de-DE",
                url: "",
            },
            "en-US": {
                format: "ass",
                locale: "en-US",
                url: "",
            },
            "es-419": {
                format: "ass",
                locale: "es-419",
                url: "",
            },
            "es-ES": {
                format: "ass",
                locale: "es-ES",
                url: "",
            },
            "fr-FR": {
                format: "ass",
                locale: "fr-FR",
                url: "",
            },
            "it-IT": {
                format: "ass",
                locale: "it-IT",
                url: "",
            },
            "pt-BR": {
                format: "ass",
                locale: "pt-BR",
                url: "",
            },
            "ru-RU": {
                format: "ass",
                locale: "ru-RU",
                url: "",
            },
        },
        bifs: [
            "https://v.vrv.co/evs3/c8c12b6e079408a2e491a3066dc210bf/assets/dda80n14ilv68i6_bif.bif?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly92LnZydi5jby9ldnMzL2M4YzEyYjZlMDc5NDA4YTJlNDkxYTMwNjZkYzIxMGJmL2Fzc2V0cy9kZGE4MG4xNGlsdjY4aTZfYmlmLmJpZiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY3NjQwODM1OH19fV19\u0026Signature=CDKuHcWXH-8-mxTPhXWgyZscCgQBbsJpZqWsHBb6H-IcjZ-2YDrHCdrxBjIkh8qVDRLiY3FRyjb0Y9SmWO2DZ2eDs1FOyAEpM9c0Ns5Vd0N7OrE6W3-5IYaoHIwn7oMe2fBsRq4y7Q7xh9sMh8gwfyDuqPwnl5SeEllk9N1t83GNwWaQjN~KYnHfikBE55lwnyXUA3WoS8qXjbVzcqt8dDZV7a4gTsm84Bm2NgidDfxF~R9SiQJ8pZFoFi9yPr6e-yewDOQNGGf7pJ4-85yrlNg2ehiq5JYw6K13KDTf~-38hwnGMuFROuRoQLh1O36b5EciYe4sGkUZrY~E5zcpUg__\u0026Key-Pair-Id=APKAJMWSQ5S7ZB3MF5VA",
        ],
        versions: [
            {
                audio_locale: "ja-JP",
                guid: "GRE5K0K36",
                is_premium_only: false,
                media_guid: "G9XF2004K",
                original: true,
                season_guid: "G609GZG26",
                variant: "",
            },
        ],
        media_id: "G9XF2004K",
        audio_locale: "ja-JP",
    },
};

b = {
    sources: [
        {
            url: "https://pl.crunchyroll.com/evs3/b82b26b9ff99068ec8bd15d8ecd3d14c/assets/7095b61aeb7b23244ea07354f87869e4_4960506.mp4/index-v1-a1.m3u8?res=1280x720&Expires=1676486426&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wbC5jcnVuY2h5cm9sbC5jb20vZXZzMy9iODJiMjZiOWZmOTkwNjhlYzhiZDE1ZDhlY2QzZDE0Yy9hc3NldHMvNzA5NWI2MWFlYjdiMjMyNDRlYTA3MzU0Zjg3ODY5ZTRfNDk2MDUwNi5tcDQvaW5kZXgtdjEtYTEubTN1OD9yZXM9MTI4MHg3MjAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE2NzY0ODY0MjZ9fX1dfQ__&Signature=d8u7XyqxZoInn7JZm4ni-Cmbf5AChxn4ZOR~FsCSPz4ClJcMf1qpQPzWFnpAf1VmJxxbbyzkJF7WFOOqVnkk1VwgMFMUi9oZUgSzGMhhFsWmmy8KNhptIq59wBZvGL5sxBWZpU5lEfz~BtWrKTnaX2qV2uN8OH6-O3XnUbBApxgiKLQXp43lONOdkUsbpRqG4cycYdvOGCeFJXTnzxDe6BXuBbI46Ty~k8K8PBw0tojMVMx~NtSS4XkjneEskwbIFSVYKRdWX27t2GqPuSBxPhVc9NdM92urp-70MDuHGmfEIZcKy8HKqbdrB6TH7bRO4FMifNoiROuxdnlNs4n5Ag__&Key-Pair-Id=APKAJMWSQ5S7ZB3MF5VA",
            quality: "720p",
            isM3U8: true,
        },
        {
            url: "https://pl.crunchyroll.com/evs3/b82b26b9ff99068ec8bd15d8ecd3d14c/assets/7095b61aeb7b23244ea07354f87869e4_4960507.mp4/index-v1-a1.m3u8?res=1920x1080&Expires=1676486426&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wbC5jcnVuY2h5cm9sbC5jb20vZXZzMy9iODJiMjZiOWZmOTkwNjhlYzhiZDE1ZDhlY2QzZDE0Yy9hc3NldHMvNzA5NWI2MWFlYjdiMjMyNDRlYTA3MzU0Zjg3ODY5ZTRfNDk2MDUwNy5tcDQvaW5kZXgtdjEtYTEubTN1OD9yZXM9MTkyMHgxMDgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjc2NDg2NDI2fX19XX0_&Signature=jMZrJIHunjyYE1KgRRM8mEx8C7-Q7m1A3vGyCg-bpR2uowaQ4rWjzkG-HmJNdLdHS1AQaPk6run6lPQIXCZyp9bGmH9goviLXnNAUDqVRwE9WqTmXzEagh~Mxi4XdBk9dMd5gWqIFLs2FYg5t5NHWDlO-ucz22K7NzrEl-lRAypQFwLj7DPx90fkjA1Lj6gku6AUuKZZ4fdNFzvPdMZtG8SGByijzeXtgv7DbbJDtxIY71bsdBvjh2yuIYdiHaRi~tI44-byhXxjjdrjblQcd2WjcqAx4ik45NiyXUjcPE935Z05m19jRofUia5KU-Mp1ksP~E23Xfy7AhLr0SU7sg__&Key-Pair-Id=APKAJMWSQ5S7ZB3MF5VA",
            quality: "1080p",
            isM3U8: true,
        },
        {
            url: "https://pl.crunchyroll.com/evs3/b82b26b9ff99068ec8bd15d8ecd3d14c/assets/7095b61aeb7b23244ea07354f87869e4_4960505.mp4/index-v1-a1.m3u8?res=848x480&Expires=1676486426&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wbC5jcnVuY2h5cm9sbC5jb20vZXZzMy9iODJiMjZiOWZmOTkwNjhlYzhiZDE1ZDhlY2QzZDE0Yy9hc3NldHMvNzA5NWI2MWFlYjdiMjMyNDRlYTA3MzU0Zjg3ODY5ZTRfNDk2MDUwNS5tcDQvaW5kZXgtdjEtYTEubTN1OD9yZXM9ODQ4eDQ4MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY3NjQ4NjQyNn19fV19&Signature=pbcj4PEUpW2Nhrq0XgDqzxTA~fMDKtKcEYDndjFldtOeJ9Ppt3VLNjl5hb~mRCoCHLh4rk4J9Pp2Ncp1~yYz9~cDziyOOf5zMyefJ2DIYoruBTfLqWRCCZOjxzyyAxYQA7cmIWepJhRtTkTxkBvkpG781t5BpzXWtOmRUK0fZL~NRpeicT-xeko3z5qJ3pD58ix~R~~1whk0Y42ux-3D8NMuRI~Nsl5pey5vnkPmu~XAYCycRCXPyMNrbRzyrHBnpPJxzWPUsdnNMnY9m4uzxyVgUGm9RmgVGNkoL5P~zC0uLbJtSrq7B0AIYLZiPoP7Fj~5V2lW36j74FuwjC1yFw__&Key-Pair-Id=APKAJMWSQ5S7ZB3MF5VA",
            quality: "480p",
            isM3U8: true,
        },
        {
            url: "https://pl.crunchyroll.com/evs3/b82b26b9ff99068ec8bd15d8ecd3d14c/assets/7095b61aeb7b23244ea07354f87869e4_4960503.mp4/index-v1-a1.m3u8?res=640x360&Expires=1676486426&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wbC5jcnVuY2h5cm9sbC5jb20vZXZzMy9iODJiMjZiOWZmOTkwNjhlYzhiZDE1ZDhlY2QzZDE0Yy9hc3NldHMvNzA5NWI2MWFlYjdiMjMyNDRlYTA3MzU0Zjg3ODY5ZTRfNDk2MDUwMy5tcDQvaW5kZXgtdjEtYTEubTN1OD9yZXM9NjQweDM2MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY3NjQ4NjQyNn19fV19&Signature=JKRd1cOVq5cB13RVJ3xbncrEdIL-S3~MiJ1rnTmZy5xJYKrhbC3E8f-d4bv1lz9h1qZ105KKo5w-gUBqVai8ImOzOl7jmuMsihl6nXQdweIkLnnVMvF9A7td1BjN1bsIuffY9oB-BqNsF6HL~xdsb4VRilW8pQBSp2TItWggPx8SFQ9iVN2gyiCEF3aje34B6QmEeKmA-JymDZOQZlcQ4wrgSIdhjT6whSyPzyuyKQEseVwU6VrogZtjakqXxC5cmnXdJz~BtQbNA~dxFQIDoOqJFWnsa~wAmXVQ9VcrZHmDc0sfho2yhIWXIEpNR5k7FZkRXxSH0-bLVmyQ0rv2Pg__&Key-Pair-Id=APKAJMWSQ5S7ZB3MF5VA",
            quality: "360p",
            isM3U8: true,
        },
        {
            url: "https://pl.crunchyroll.com/evs3/b82b26b9ff99068ec8bd15d8ecd3d14c/assets/7095b61aeb7b23244ea07354f87869e4_4960504.mp4/index-v1-a1.m3u8?res=428x240&Expires=1676486426&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wbC5jcnVuY2h5cm9sbC5jb20vZXZzMy9iODJiMjZiOWZmOTkwNjhlYzhiZDE1ZDhlY2QzZDE0Yy9hc3NldHMvNzA5NWI2MWFlYjdiMjMyNDRlYTA3MzU0Zjg3ODY5ZTRfNDk2MDUwNC5tcDQvaW5kZXgtdjEtYTEubTN1OD9yZXM9NDI4eDI0MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY3NjQ4NjQyNn19fV19&Signature=eY5d26hgVRK2m1WsrQg6CjbgAXS-RI6fdZovt3dz0dBPJ54UV3EpJdEeskrBQdFTZayE11RDw7tFUUn-gEIgiQ2Vx98TW0eqbnDlhGdTSdi0C5YQKXAl70dx~d7Yq19ycnoam~KPUY5kUD9G9fluP3XXUD2wcW8kc-LAVTNOPb~38xU76dE-p4y~Iq8CK2Yr3MrG5bz7q2SfZoa4Y25fTnyDiRL47GLZeQOvQrXl9RaYJ7sxp-eYdC81yk2A1iFrE2xiHkw5XWdAZtKEQERSdH2GJRwCg48A0Ffpo7YLu124YN0M5nssTEMbyRJIP2TfiL0m57C70NHbq3LUg8K5qA__&Key-Pair-Id=APKAJMWSQ5S7ZB3MF5VA",
            quality: "240p",
            isM3U8: true,
        },
        {
            quality: "auto",
            url: "https://pl.crunchyroll.com/evs3/b82b26b9ff99068ec8bd15d8ecd3d14c/assets/7095b61aeb7b23244ea07354f87869e4_,4960506.mp4,4960507.mp4,4960505.mp4,4960503.mp4,4960504.mp4,.urlset/master.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9wbC5jcnVuY2h5cm9sbC5jb20vZXZzMy9iODJiMjZiOWZmOTkwNjhlYzhiZDE1ZDhlY2QzZDE0Yy9hc3NldHMvNzA5NWI2MWFlYjdiMjMyNDRlYTA3MzU0Zjg3ODY5ZTRfLDQ5NjA1MDYubXA0LDQ5NjA1MDcubXA0LDQ5NjA1MDUubXA0LDQ5NjA1MDMubXA0LDQ5NjA1MDQubXA0LC51cmxzZXQvbWFzdGVyLm0zdTgiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE2NzY0ODYxMTV9fX1dfQ__&Signature=L9Hu-m6EVALwzYDYZgAqCP8opD75kiR8Us-K~-dTO2GO2Yag3nzx5FU4LHN~alxS6wIGEYghmst~yW4hd7zDVnusK1THmyZ~S~8Xv6a88CoIgxy6p0UPFUj7UzpklZ7eZOPzHW44g-1MEHAbd-zdLds-~gjkO1os5gWHge0xkk2mud79F~YmJ2u06rMq7WBCN72jzyCjiC-PqlLYDLYu3WL5oodfTTgP96NIv5iqt5cE4IvrfGDEpjFCJnhvgXzTtHisDjrTzZWR1iapxwapMN37CVY664xP-8HkLDylzZ5afO9KPRiFYsxaJJ5AdkZdO8nYVRj~Loqg6thDSsT-qQ__&Key-Pair-Id=APKAJMWSQ5S7ZB3MF5VA",
            isM3U8: true,
        },
        {
            quality: "hardsub ar-SA",
            url: "https://pl.crunchyroll.com/evs3/b82b26b9ff99068ec8bd15d8ecd3d14c/assets/7095b61aeb7b23244ea07354f87869e4_,4964363.mp4,4964369.mp4,4964357.mp4,4964345.mp4,4964351.mp4,.urlset/master.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9wbC5jcnVuY2h5cm9sbC5jb20vZXZzMy9iODJiMjZiOWZmOTkwNjhlYzhiZDE1ZDhlY2QzZDE0Yy9hc3NldHMvNzA5NWI2MWFlYjdiMjMyNDRlYTA3MzU0Zjg3ODY5ZTRfLDQ5NjQzNjMubXA0LDQ5NjQzNjkubXA0LDQ5NjQzNTcubXA0LDQ5NjQzNDUubXA0LDQ5NjQzNTEubXA0LC51cmxzZXQvbWFzdGVyLm0zdTgiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE2NzY0ODYxMTV9fX1dfQ__&Signature=NcR21J42Nsomr1JQ2Pe~oU2Mfl1Y8EMTfO-OXVOJJSYAFx~54TduHRnAX~6Idno1CZ0~M9eQ7Eu2sOYW1KNZHvRSpltDK-EXNFo7f9Dip4Qok2N4lKpN4QjOAZaAvq-VyEi7XJAkfciToEt-MJBH4jO8Yka92JsfX0U7pDoq9a~nk3PmYguKypC8idlmzYIi4HUbAvZwiTtiIJaqUP1JufH7ioFk0IkM9g~8O0MrAiTOgKk3yoefbMEe1VSLPOXhZOmaek3~gtm5ZEjsPn-7sPBPdyjqkIKaf57kIBci5HB188x-6bE57TWnJhzBiOCB48vHYOJomJLj4fCBcMUm5g__&Key-Pair-Id=APKAJMWSQ5S7ZB3MF5VA",
            isM3U8: true,
        },
        {
            quality: "hardsub de-DE",
            url: "https://pl.crunchyroll.com/evs3/b82b26b9ff99068ec8bd15d8ecd3d14c/assets/7095b61aeb7b23244ea07354f87869e4_,4964364.mp4,4964370.mp4,4964358.mp4,4964346.mp4,4964352.mp4,.urlset/master.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9wbC5jcnVuY2h5cm9sbC5jb20vZXZzMy9iODJiMjZiOWZmOTkwNjhlYzhiZDE1ZDhlY2QzZDE0Yy9hc3NldHMvNzA5NWI2MWFlYjdiMjMyNDRlYTA3MzU0Zjg3ODY5ZTRfLDQ5NjQzNjQubXA0LDQ5NjQzNzAubXA0LDQ5NjQzNTgubXA0LDQ5NjQzNDYubXA0LDQ5NjQzNTIubXA0LC51cmxzZXQvbWFzdGVyLm0zdTgiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE2NzY0ODYxMTV9fX1dfQ__&Signature=CJv5Lznq5D0y8Wf9ZN~Gcdqd1fbF4GwALdZn5tKAEQKB0SaXTMJeYjGvOLXXPBEjk-7WBGc61ERz4B6U3fTwVQLs8RGoTZs3vvjxb10mZEHB1wN7NzvxI-SFXorhX-7hLPdc5TpMgDlfrCPT5mTMApM2Bjzt46VOdQcAm1gSRvkigDYu9CuwMGp9oe2QoMJsrelw6KD5Q9i-ki6qZoDACPaENlOSt5lufo6k5SVCO-5VnxzKHVBkmNC1p0LXkKOItHc8I-EvCaFUmsrOvyZQ-x6oeKm3-S4FCgaEvF3U4D2kDubL9YBQ~R6zn3v3uOqWBev-sDx-lhna9bpf~wTjog__&Key-Pair-Id=APKAJMWSQ5S7ZB3MF5VA",
            isM3U8: true,
        },
        {
            quality: "hardsub en-US",
            url: "https://pl.crunchyroll.com/evs3/b82b26b9ff99068ec8bd15d8ecd3d14c/assets/7095b61aeb7b23244ea07354f87869e4_,4964360.mp4,4964366.mp4,4964354.mp4,4964342.mp4,4964348.mp4,.urlset/master.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9wbC5jcnVuY2h5cm9sbC5jb20vZXZzMy9iODJiMjZiOWZmOTkwNjhlYzhiZDE1ZDhlY2QzZDE0Yy9hc3NldHMvNzA5NWI2MWFlYjdiMjMyNDRlYTA3MzU0Zjg3ODY5ZTRfLDQ5NjQzNjAubXA0LDQ5NjQzNjYubXA0LDQ5NjQzNTQubXA0LDQ5NjQzNDIubXA0LDQ5NjQzNDgubXA0LC51cmxzZXQvbWFzdGVyLm0zdTgiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE2NzY0ODYxMTV9fX1dfQ__&Signature=U1Hr1T3fJqLY2rl6ZGWlrEtenKxSD~u~N9teTUnJc5KiIctWz6cRwRxHV4ojoFXoK-4vf0ICWyZns2nol4H-sp3vZZNW356QlowWQ5hStXFJETI6R9K-R1u6JntloV0cuqzVRIIEjS2pAZqX9uOqrARFsGl3tCNNi2XWH6S0DT~R~Xhuoi0MjnMGHxnq5fbHVcjGy3lxCIg0aK~0-eD~tvzlFjFlGuTitoIZ9jPKtWxSxK2U95HGf8kb0yTRcr4KzIcG1~4sBhLEMi52YEi5-dZtVzj4Npla~mY93hKWo8zqbGMxueJsQmQwR3NaF-u2k8ND6hX2~ZVOzkkzwJ11Sg__&Key-Pair-Id=APKAJMWSQ5S7ZB3MF5VA",
            isM3U8: true,
        },
        {
            quality: "hardsub es-419",
            url: "https://pl.crunchyroll.com/evs3/b82b26b9ff99068ec8bd15d8ecd3d14c/assets/7095b61aeb7b23244ea07354f87869e4_,4964438.mp4,4964439.mp4,4964437.mp4,4964435.mp4,4964436.mp4,.urlset/master.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9wbC5jcnVuY2h5cm9sbC5jb20vZXZzMy9iODJiMjZiOWZmOTkwNjhlYzhiZDE1ZDhlY2QzZDE0Yy9hc3NldHMvNzA5NWI2MWFlYjdiMjMyNDRlYTA3MzU0Zjg3ODY5ZTRfLDQ5NjQ0MzgubXA0LDQ5NjQ0MzkubXA0LDQ5NjQ0MzcubXA0LDQ5NjQ0MzUubXA0LDQ5NjQ0MzYubXA0LC51cmxzZXQvbWFzdGVyLm0zdTgiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE2NzY0ODYxMTV9fX1dfQ__&Signature=qutfhHZgFoZD81fgip9s~vqMoV0Gk3k0NeYZRFwK1eIvMzaOC9cxLKxCvsb~eeluRyWE8sZDswPe5JE0X0TxNwxuufSL58pv5-fNlQKFkCmehoaJiNk1X2af3y35RkC9P70-nfoLWLO-SXuSdSZ4XUDzHOfhUhOs-Z-GR6EKASO~0o8R3RLSIcecaC5R0DsqhA6LVyLGgoa1z7jaWKNBl1jUirqOtGXa2FBCkF2LP0dRtATf5m~BTWYWxGJzfSJAIobgDnCYOq0ADfipKfSDfHz0ZW1HNiybdH6HFb2nDjJE25FFI-8ITPQYPhCS69LDp55i9q-9zlJFARsrtBanwA__&Key-Pair-Id=APKAJMWSQ5S7ZB3MF5VA",
            isM3U8: true,
        },
        {
            quality: "hardsub es-ES",
            url: "https://pl.crunchyroll.com/evs3/b82b26b9ff99068ec8bd15d8ecd3d14c/assets/7095b61aeb7b23244ea07354f87869e4_,4964452.mp4,4964453.mp4,4964451.mp4,4964449.mp4,4964450.mp4,.urlset/master.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9wbC5jcnVuY2h5cm9sbC5jb20vZXZzMy9iODJiMjZiOWZmOTkwNjhlYzhiZDE1ZDhlY2QzZDE0Yy9hc3NldHMvNzA5NWI2MWFlYjdiMjMyNDRlYTA3MzU0Zjg3ODY5ZTRfLDQ5NjQ0NTIubXA0LDQ5NjQ0NTMubXA0LDQ5NjQ0NTEubXA0LDQ5NjQ0NDkubXA0LDQ5NjQ0NTAubXA0LC51cmxzZXQvbWFzdGVyLm0zdTgiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE2NzY0ODYxMTV9fX1dfQ__&Signature=euuIMYrr3~T3HVLwuhFdFnj1mfCUuZK168zyZ-mI1C7ZdFxRJq83CZ2FZkDUE1axM9tXtZLXhxpfk1vWrCrq6bzbtnC4vjovYngrCbFc9iwnHYxwdK6JkbmgpkgtlCTIrYqxAUmkQkAss9FKQeFoFT~aPs6FX2adcgRYz~c1wk6nhasFcsQt1wMNyeuIc3Lf52WbocHitEnxcVV1W7BXQEFNHg~C0mYevr10g8zs0aPNbqOFa2OIcADu8j77nvRNzvCMZy9G3obTHoufh7fd~4M3aqECRQLhhccv53xkuW~fZe6yFdLlPGsOJeFg~LD8xozw9igl5lbVI1hF~ZsEig__&Key-Pair-Id=APKAJMWSQ5S7ZB3MF5VA",
            isM3U8: true,
        },
        {
            quality: "hardsub fr-FR",
            url: "https://pl.crunchyroll.com/evs3/b82b26b9ff99068ec8bd15d8ecd3d14c/assets/7095b61aeb7b23244ea07354f87869e4_,4964361.mp4,4964367.mp4,4964355.mp4,4964343.mp4,4964349.mp4,.urlset/master.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9wbC5jcnVuY2h5cm9sbC5jb20vZXZzMy9iODJiMjZiOWZmOTkwNjhlYzhiZDE1ZDhlY2QzZDE0Yy9hc3NldHMvNzA5NWI2MWFlYjdiMjMyNDRlYTA3MzU0Zjg3ODY5ZTRfLDQ5NjQzNjEubXA0LDQ5NjQzNjcubXA0LDQ5NjQzNTUubXA0LDQ5NjQzNDMubXA0LDQ5NjQzNDkubXA0LC51cmxzZXQvbWFzdGVyLm0zdTgiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE2NzY0ODYxMTV9fX1dfQ__&Signature=ghNxyARLJRpwlxzlSJkYUQIb47kf6szmH9rWHlLlqGBNHz0UMyl0jLgiWlRE5v28mlo8C4POMWXtrPI6SsVYti85hyEu39kJ5aLuocLtVRdmMol2bDSjFCHrdm8YJDhrQ7-VyWf1zlmPtB94oTbOfEQsse1j4~QZ8tBFXY8AWck5tMJ-nG-5pzf3BfGCM~GZhVYlyJeWFhLZIYBh2dLFwPohL2og6Yv87jmopODoIbRmAuLm2hRFGyI3UQnI983~sLR5ECAxzIOR-yps7dkStIzRFDkidKlF0AfSwMmQDH0eZEJfcBZcNJBblUJuVT3DmQlAnyIDWuODREnbqLgigw__&Key-Pair-Id=APKAJMWSQ5S7ZB3MF5VA",
            isM3U8: true,
        },
        {
            quality: "hardsub it-IT",
            url: "https://pl.crunchyroll.com/evs3/b82b26b9ff99068ec8bd15d8ecd3d14c/assets/7095b61aeb7b23244ea07354f87869e4_,4964424.mp4,4964425.mp4,4964423.mp4,4964421.mp4,4964422.mp4,.urlset/master.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9wbC5jcnVuY2h5cm9sbC5jb20vZXZzMy9iODJiMjZiOWZmOTkwNjhlYzhiZDE1ZDhlY2QzZDE0Yy9hc3NldHMvNzA5NWI2MWFlYjdiMjMyNDRlYTA3MzU0Zjg3ODY5ZTRfLDQ5NjQ0MjQubXA0LDQ5NjQ0MjUubXA0LDQ5NjQ0MjMubXA0LDQ5NjQ0MjEubXA0LDQ5NjQ0MjIubXA0LC51cmxzZXQvbWFzdGVyLm0zdTgiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE2NzY0ODYxMTV9fX1dfQ__&Signature=UknUnvhSv9Yt0VAhw6AdZxRAb8yFuPGnPeBQVO1MGzwZVy07g9Pqa0-P~f-NmoCPSPafz3i1Vksk~2gzrpcA5cjIk30dHeYOO1U5F1POs0MJWroUsVLeKsjLuVgp-YeUU3GvONN6qEs-Mm7olFV1YE-FBd5xcceWBxyOUxb16eTzk0xfqCAg8Sj53baBom-jJpE84Jgk~fLLSnO1y-JWQz3gGRn07iIdsiRcY17yLLkUaebFIr3geltChuo6YBexxls~SOovgzULcOrLLjv8RqtIiBvzQg~gKv93GG4xS2SO8uF32u5mO3Q5XT~YfOnZ2r21KbkdxJ3h2qfkUW9KOA__&Key-Pair-Id=APKAJMWSQ5S7ZB3MF5VA",
            isM3U8: true,
        },
        {
            quality: "hardsub pt-BR",
            url: "https://pl.crunchyroll.com/evs3/b82b26b9ff99068ec8bd15d8ecd3d14c/assets/7095b61aeb7b23244ea07354f87869e4_,4964362.mp4,4964368.mp4,4964356.mp4,4964344.mp4,4964350.mp4,.urlset/master.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9wbC5jcnVuY2h5cm9sbC5jb20vZXZzMy9iODJiMjZiOWZmOTkwNjhlYzhiZDE1ZDhlY2QzZDE0Yy9hc3NldHMvNzA5NWI2MWFlYjdiMjMyNDRlYTA3MzU0Zjg3ODY5ZTRfLDQ5NjQzNjIubXA0LDQ5NjQzNjgubXA0LDQ5NjQzNTYubXA0LDQ5NjQzNDQubXA0LDQ5NjQzNTAubXA0LC51cmxzZXQvbWFzdGVyLm0zdTgiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE2NzY0ODYxMTV9fX1dfQ__&Signature=cRVykrFIckcgKwWyGyLHFjB2N0JjUAV1VXttOzvKlHpanR7tVXTUcPpoz~zolwUapO2OwHVMTvlKLDIub--4Qt~cZhsIeDI9S3shNX8aelJwGew8NgjNrXVJgd6PwreFv5W1tL-S~PrC-kIkaHW6rXW~yMqoOziThFw6bhteVZDKPNbPYl3ACOhQJsH0fo0PjdXwUWZ7ATfoNeDjoEZJaeWO-k34~rOtFt5QZcG80flNQW90CwYQtJPH72mWJ4Bsqpbv8uobqmFxXIu0Wkp0BvCL23gii7BVb~y9af2CZq5t8xfw2GK-D6C3F2-jZ4mk0OVmsZN9o77nRpjcY306dg__&Key-Pair-Id=APKAJMWSQ5S7ZB3MF5VA",
            isM3U8: true,
        },
        {
            quality: "hardsub ru-RU",
            url: "https://pl.crunchyroll.com/evs3/b82b26b9ff99068ec8bd15d8ecd3d14c/assets/7095b61aeb7b23244ea07354f87869e4_,4964365.mp4,4964371.mp4,4964359.mp4,4964347.mp4,4964353.mp4,.urlset/master.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9wbC5jcnVuY2h5cm9sbC5jb20vZXZzMy9iODJiMjZiOWZmOTkwNjhlYzhiZDE1ZDhlY2QzZDE0Yy9hc3NldHMvNzA5NWI2MWFlYjdiMjMyNDRlYTA3MzU0Zjg3ODY5ZTRfLDQ5NjQzNjUubXA0LDQ5NjQzNzEubXA0LDQ5NjQzNTkubXA0LDQ5NjQzNDcubXA0LDQ5NjQzNTMubXA0LC51cmxzZXQvbWFzdGVyLm0zdTgiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE2NzY0ODYxMTV9fX1dfQ__&Signature=GCCmxiYU8pK8KEBlRcGnmJ4hXMXWuYmKR0GHAZPe9coxwXSCUaosX6ZUJGwctNvegNZai11K3CM-gR5BRsXsKBEXj3OTL5dxH80U0p8yyF-3P5MS5xBzpL3bwcpLcjNNvUiJq~XJel8qsYGUJPqGOJdrUfZLmYoF9WtnHr0jOe5-ufw6MGgBwM21LKnUShdvm2tR16f3~BCFvUntDXdLsMv2gJlDR8cj5a5P9SCyBvGwCGTmvGBCuLasxPf0uY5HtEJb7gWlJ3z0iRiFrYNosyfdzIjUEyfUWwYFM3k949JenO3BoTVF3pnFyV3UPBQAxLjN1Ma3ldcXzSM18vRGFg__&Key-Pair-Id=APKAJMWSQ5S7ZB3MF5VA",
            isM3U8: true,
        },
    ],
    subtitles: [
        {
            url: "https://v.vrv.co/evs3/b82b26b9ff99068ec8bd15d8ecd3d14c/assets/7095b61aeb7b23244ea07354f87869e4_332871.txt?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly92LnZydi5jby9ldnMzL2I4MmIyNmI5ZmY5OTA2OGVjOGJkMTVkOGVjZDNkMTRjL2Fzc2V0cy83MDk1YjYxYWViN2IyMzI0NGVhMDczNTRmODc4NjllNF8zMzI4NzEudHh0IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjc2NDg2MTE1fX19XX0_&Signature=kSNkkKQ7-BXdAifVCnGQLS-SAOprKttir4QhA664c781POjnejaPsTY8W1dz2pvYSDvt~HwhJfL55OFOjPwW~hEWV8I695tnYqV5a1X8ZXErMxJk64lXe2XGXbw6NSa4chp8CJJfykt9j9at6fbUSTDvdUWpgd9BWyn3FPdxyeKhZVMfW~SdixVuX5PfREcHycHfp6f92jk9ibl~0Or7M7Sr6aK244Pz4LjilBvRnAN~24hU75mY3BatDndXPFjuQ4ghi6JvNB-VL0AkuUgcETJLmKiG9Nz2I405Sadn~W9E-Sgn8o~uQz23Au7HxnM~KimI9gk~d-VZTIyqXz9cLw__&Key-Pair-Id=APKAJMWSQ5S7ZB3MF5VA",
            lang: "ar-SA",
            format: "ass",
        },
        {
            url: "https://v.vrv.co/evs3/b82b26b9ff99068ec8bd15d8ecd3d14c/assets/7095b61aeb7b23244ea07354f87869e4_332872.txt?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly92LnZydi5jby9ldnMzL2I4MmIyNmI5ZmY5OTA2OGVjOGJkMTVkOGVjZDNkMTRjL2Fzc2V0cy83MDk1YjYxYWViN2IyMzI0NGVhMDczNTRmODc4NjllNF8zMzI4NzIudHh0IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjc2NDg2MTE1fX19XX0_&Signature=HTgHPUGukNNGfWV3F~IeyGvT2jg4kvighzQkKZHGzxIxqyv9309ZkJjJMORRbNXTF-u1ONWcRCh09UqvnLUonPfONcp1DsqLqeXe7ZUj4439VCo2ncf2fn18PATb4KFDLEGHj7NHaoh2uztAMHVCUVQyUpETrIO65gD~XBBFhGfV6hc4o5u1NWFwsReCqIqpT5z~uDNtA4wAQucJ4SLeb6pKrgZrjrLX2d1TgeJ6d~j0q5x-Yir-h3hcDXocDuToSJWPcjuXK6KHFLo32gl2GQdQRIkiE~dYCCSXSJFbT7oXjmx3mnQ5QonCzBSERf8SYTnMXOfI5VygunQCoLfIoQ__&Key-Pair-Id=APKAJMWSQ5S7ZB3MF5VA",
            lang: "de-DE",
            format: "ass",
        },
        {
            url: "https://v.vrv.co/evs3/b82b26b9ff99068ec8bd15d8ecd3d14c/assets/7095b61aeb7b23244ea07354f87869e4_332862.txt?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly92LnZydi5jby9ldnMzL2I4MmIyNmI5ZmY5OTA2OGVjOGJkMTVkOGVjZDNkMTRjL2Fzc2V0cy83MDk1YjYxYWViN2IyMzI0NGVhMDczNTRmODc4NjllNF8zMzI4NjIudHh0IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjc2NDg2MTE1fX19XX0_&Signature=R1PIsiAfQKQfnWk4fBbrJV3GnFl17dsXC~ganv6Vz4Q5Rn4ZTupR9i5lXR5NP6ZoQYBkpiqIpHqnQdVwfucA6P39kI9SczzKbXaG-hMWcJLd7WH7gNVtkx8GmMlB7aqVMhT8aHQRfgsOB2m53cICjZQSKLkWLBFSBTbYUcYr71REYhyW1gtR2srzcme9KZGPevtj9GfY1s1nFcGg4aIGv4U9Zv2uBjFl7XGPmElu480I53VHnccqadk91C0JUNo54OEHMGS0duzaH-kS3yrUDZHisO9jnkW9XnBgqaHfwko~IM4iPd8hajCFE4GuiB2P70VduMotj5Cuhht7zGo4-Q__&Key-Pair-Id=APKAJMWSQ5S7ZB3MF5VA",
            lang: "en-US",
            format: "ass",
        },
        {
            url: "https://v.vrv.co/evs3/b82b26b9ff99068ec8bd15d8ecd3d14c/assets/7095b61aeb7b23244ea07354f87869e4_332885.txt?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly92LnZydi5jby9ldnMzL2I4MmIyNmI5ZmY5OTA2OGVjOGJkMTVkOGVjZDNkMTRjL2Fzc2V0cy83MDk1YjYxYWViN2IyMzI0NGVhMDczNTRmODc4NjllNF8zMzI4ODUudHh0IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjc2NDg2MTE1fX19XX0_&Signature=gyS~3snSjzZvX5mg7iv8yPTJUI8zm9DNM4OHVA5qfG2mlUycMAbAZMHAhxif5Bwl9ER~kZis-ZkvO0iXjHOWf-BH9imo2gUVJ0ZD-EQGpI-OabAZd8tjaMM9lGuG1IkDzHAHhguP~IhzyBgafdhVZ2r~w549hH2lQqR0gaEhIPZUTU3jpXHzv-SX52Nd6nRNqDsmQqldICDyG2IbXQTc-wjOBoV-mEeM102yfQbb3fFC2Uh3diLDu8lXYjQLGhDA8-QVnjoOR0E9NvGLCBK2fSd0wtXO5QuRIL~GRZ-D6vwA4e03gqEeBOc3zZbpO-E40yTOGvIbMuBb762qGJth6A__&Key-Pair-Id=APKAJMWSQ5S7ZB3MF5VA",
            lang: "es-419",
            format: "ass",
        },
        {
            url: "https://v.vrv.co/evs3/b82b26b9ff99068ec8bd15d8ecd3d14c/assets/7095b61aeb7b23244ea07354f87869e4_332887.txt?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly92LnZydi5jby9ldnMzL2I4MmIyNmI5ZmY5OTA2OGVjOGJkMTVkOGVjZDNkMTRjL2Fzc2V0cy83MDk1YjYxYWViN2IyMzI0NGVhMDczNTRmODc4NjllNF8zMzI4ODcudHh0IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjc2NDg2MTE1fX19XX0_&Signature=JOyVnh8r5tq1llgLDHW82K~z1vmDn3bLI6owKMa7FLFUWubASUI3cUqTsOiJB44zwUctBXzlaNm21gqL2IY3wiYuedYsxrD2J7Pz9t2aMvRLIrFRzN~uabRfHhk~vtz8ZsNpnrvTsBWsBDCkTjzKSuqxya3Mc3dQ-zUKSiXKT-CdyDbxPG7NCxwqN1dctGVdkTY7sHatAtuvUtK3yRqoQRh8NLmUpuP5lI~-ALpK-yhyIyUyOVzz4gV-Rxc-RKhhvZ7I6sSAOVSJ1CbCBwo2LzJcaS-oneBoymeJjPdG1jIY6jPGAwbe7ZFA0SEyxhkTOb8c4csb2ebVDjlOqYFyIQ__&Key-Pair-Id=APKAJMWSQ5S7ZB3MF5VA",
            lang: "es-ES",
            format: "ass",
        },
        {
            url: "https://v.vrv.co/evs3/b82b26b9ff99068ec8bd15d8ecd3d14c/assets/7095b61aeb7b23244ea07354f87869e4_332869.txt?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly92LnZydi5jby9ldnMzL2I4MmIyNmI5ZmY5OTA2OGVjOGJkMTVkOGVjZDNkMTRjL2Fzc2V0cy83MDk1YjYxYWViN2IyMzI0NGVhMDczNTRmODc4NjllNF8zMzI4NjkudHh0IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjc2NDg2MTE1fX19XX0_&Signature=bql~O5SOhNeR35Y6wEToZeU~jVM33hxM3qsU~NROkw1yQSMAZ1ea~ybN-PD0VCOW0A819xE8POFgAnmJgwiwFNj0CWmtonBIPzauIInJepaoMfQYMW0zf3ZNr0hxo~8bwLibT53Kxu7tpJ~z~DcbTUXPBX4i2~kruY1ASOdRom1Cec9s1tl8STSlAnpUh-uw4WNr6VrSQNZmvw6Gy35M8DavP-L~LguPQF9QzE5sPAcRxi1ZQsb6G1Lsl~XstTKqynXvpvtqKYaUAAysfoXyz4m69K7GoEWAZ8bNiQw6ynvGVWkx5dBEHQqrftKuZoSwBVEymcc6eWNJvWNY3K-j8g__&Key-Pair-Id=APKAJMWSQ5S7ZB3MF5VA",
            lang: "fr-FR",
            format: "ass",
        },
        {
            url: "https://v.vrv.co/evs3/b82b26b9ff99068ec8bd15d8ecd3d14c/assets/7095b61aeb7b23244ea07354f87869e4_332880.txt?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly92LnZydi5jby9ldnMzL2I4MmIyNmI5ZmY5OTA2OGVjOGJkMTVkOGVjZDNkMTRjL2Fzc2V0cy83MDk1YjYxYWViN2IyMzI0NGVhMDczNTRmODc4NjllNF8zMzI4ODAudHh0IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjc2NDg2MTE1fX19XX0_&Signature=soSBesIA4ENYmD2jg5SOrwHMuNjW2e1zkipM3zT8raSQciiEA1nkv5RYUhACPocbRxL~X6~JIfmxkjwkuKLDDxZeXsuavn7fDhROTdOKO6-a0ew5nrqg42kQ4uUPML16gKj0pwEdkmU2p1zR4PGtx-VTPm78g6gE0JTLxYkfrq4mlKqjd7wHRZtXgsGuozMe3m-EFUH3ISKDHsmOe4b5lA~FTAJLi2M5yssIHZSUgqGqqd265NXObUTbb8X0-V9EwB4G9pDwyt6UYubsikwmZI3-c8U4ZfyrIHcg10cULJ2rEpaD67QrgGaDG6rv3eCVOagdNN-XHomrjEeKNTH8Sw__&Key-Pair-Id=APKAJMWSQ5S7ZB3MF5VA",
            lang: "it-IT",
            format: "ass",
        },
        {
            url: "https://v.vrv.co/evs3/b82b26b9ff99068ec8bd15d8ecd3d14c/assets/7095b61aeb7b23244ea07354f87869e4_332870.txt?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly92LnZydi5jby9ldnMzL2I4MmIyNmI5ZmY5OTA2OGVjOGJkMTVkOGVjZDNkMTRjL2Fzc2V0cy83MDk1YjYxYWViN2IyMzI0NGVhMDczNTRmODc4NjllNF8zMzI4NzAudHh0IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjc2NDg2MTE1fX19XX0_&Signature=AB9ry-4H4tt4b7q-GlIr2kcIynCMc3hQtvZrRWQA3FfUf8VIBLiRjFMw22ZIxezSu0OFxAyXI9aWxnlnd~SfBZcGL91BPC4daFcaO6nw9vpZVpSM8sSeYwljOvb5wWsU4g1wYqk6siShhCIiWAE6y4QVKPBTOm7AQHgAHccR~Ev9tMhgLhVuhFDONhVEYsZwr5k~Rca80cIWfO4lvb5fKVw6gA-tsOaiP0ZOcM54UwqBR8AkuEVuyUoQ~dcWSgraZG4bEYbg622aR~Gfp3M0bouLTGoj8ydFn3nloCmhYgiQpxAM1-RHx9UIdUazdB5b-10VD91M8Xyz1jWW~wYNyg__&Key-Pair-Id=APKAJMWSQ5S7ZB3MF5VA",
            lang: "pt-BR",
            format: "ass",
        },
        {
            url: "https://v.vrv.co/evs3/b82b26b9ff99068ec8bd15d8ecd3d14c/assets/7095b61aeb7b23244ea07354f87869e4_332873.txt?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly92LnZydi5jby9ldnMzL2I4MmIyNmI5ZmY5OTA2OGVjOGJkMTVkOGVjZDNkMTRjL2Fzc2V0cy83MDk1YjYxYWViN2IyMzI0NGVhMDczNTRmODc4NjllNF8zMzI4NzMudHh0IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjc2NDg2MTE1fX19XX0_&Signature=l3oy1ds9zmjXdu7o2BxIE-4bAoHb3iskbfWGuoBE8UsMmmkZdB4wRdGw18nyOl3nx~kboVDVpfjqu~RFT0v8LVbkYh7rPI1VXJUVhjMNwN-CJyT2lT~7HAKdYzxDiOYaDDrN-6q7C8-gMdWx8SEqjerJbZxE32OYSNl4qYCQCLK2gLJnHGstudjFc~76pfCyr3TzMCNLExbF7SSo-5Xnt0AcYLxdh9-TumQjqxpmyuhsco7KYrxuL67y8u4U5PQN4lSeVHSMdfKnYhNicbY-~NQh1e0HZDiQLKuyXcoXLeKdF9FnJusR-J7foK6sWYF0syvbZBxvb7zFfn6MaH5ivw__&Key-Pair-Id=APKAJMWSQ5S7ZB3MF5VA",
            lang: "ru-RU",
            format: "ass",
        },
    ],
    intro: {},
};
