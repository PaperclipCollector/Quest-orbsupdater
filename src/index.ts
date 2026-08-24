import { logger } from "@vendetta";
import { completeAllVideoQuests, completeAllGameQuests, completeAllQuests } from "./quest-orbs";

const TAG = "[QuestOrbs Plugin]";

export default {
    onLoad: () => {
        logger.log(`${TAG} Plugin loaded successfully`);
    },
    onUnload: () => {
        logger.log(`${TAG} Plugin unloaded`);
    },
};

export { completeAllVideoQuests, completeAllGameQuests, completeAllQuests };
