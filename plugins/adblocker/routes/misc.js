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

const rules = [
    {
        predicate: (xhr, json) => {
            return (
                xhr.responseURL.includes("/content/") &&
                (xhr.responseURL.includes("previous_episode") ||
                    xhr.responseURL.includes("up_next_episode"))
            );
        },
        patch: (xhr, json) =>
            patchEpisodeMetadata(json.data[0].panel.episode_metadata),
    },
];

const /**@type {Route}*/ route = {
        predicate: (xhr, json) => true,
        handler: (xhr, json) => {
            for (const rule of rules) {
                if (rule.predicate(xhr, json)) {
                    rule.patch(xhr, json);
                    break;
                }
            }
        },
    };

module.exports = route;
