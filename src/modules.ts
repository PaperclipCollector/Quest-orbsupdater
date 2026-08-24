import { findByProps } from "@vendetta/metro";

export function getRestClient() {
    return findByProps("post", "get", "patch")?.default;
}

export function getQuestStore() {
    return findByProps("quests", "claimedQuests");
}

export function getQuestActions() {
    return findByProps("fetchCurrentQuests");
}
