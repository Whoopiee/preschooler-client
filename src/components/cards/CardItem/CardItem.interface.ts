export type CardItemsInARow = 2 | 3 | 4 | 5;

export interface ICardItem {
  cardsInARow: CardItemsInARow;
  isCardsWide?: boolean;
  hasHeightByContent?: boolean;
  hasWidthByContent?: boolean;
  hasMobile100PercentWidth?: boolean;
}
