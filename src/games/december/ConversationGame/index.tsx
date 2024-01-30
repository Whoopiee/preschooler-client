import { gameStore } from '@core/GameStore';

import { ConversationLevel } from './ConversationLevel';
import { LikeConversationsLevel } from './LikeConversationsLevel';

export const useConversationGame = gameStore.registerGame({
  game: {
    slug: 'conversation',
    section: 'education',
    filter: 'society',
    month: 'december',
    name: 'Потреба в спілкуванні',
    image: 'covers/conversation450x350.png',
  },
  levels: [
    {
      path: 'quiz',
      element: ConversationLevel,
    },
    {
      path: 'like',
      element: LikeConversationsLevel,
    },
  ],
});
