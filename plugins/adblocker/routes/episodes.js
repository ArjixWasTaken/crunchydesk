/// <reference path="index.d.ts" />

const multiIncludes = (/**@type {string}*/ str, /**@type {string[]}*/ strs) =>
    strs.every((s) => str.includes(s));

const patchEpisodeMetadata = (ep) => {
    ep.ad_breaks = [];
    ep.is_premium_only = false;
    ep.availability_starts = ep.upload_date;
    ep.free_available_date = ep.episode_air_date;
    ep.premium_available_date = ep.episode_air_date;
    ep.available_date = null;
    ep.premium_date = null;
    ep.availability_ends = "9998-11-30T08:00:00Z";
    ep.streams_link = `/content/v2/cms/videos/${((a) => (a ? a : ep.id))(
        ep.versions?.find((v) => v.original)?.media_guid
    )}/streams`;
};

const /**@type {Route}*/ route = {
        predicate: (xhr, json) =>
            multiIncludes(xhr.responseURL, ["cms", "v2"]) &&
            ["/episodes", "/objects"].some((s) =>
                xhr.responseURL.includes(s)
            ) &&
            Object(json).hasOwnProperty("data"),
        handler: (xhr, json) => {
            for (const item of json.data) {
                if (item.streams_link) continue;
                patchEpisodeMetadata(item);
            }
        },
    };

module.exports = route;
