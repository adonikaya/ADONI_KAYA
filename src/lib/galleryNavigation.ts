import { CardTemplate } from './types';

export interface GallerySelection {
  cardType: 'shradhanjali' | 'besna';
  template: CardTemplate;
}

export function resolveGallerySelection(
  typeParam: string | null,
  templateId: string | null,
  templates: CardTemplate[]
): GallerySelection | null {
  if (
    (typeParam !== 'shradhanjali' && typeParam !== 'besna') ||
    !templateId
  ) {
    return null;
  }

  const template = templates.find((item) => item.id === templateId);
  if (!template || (typeParam === 'besna') !== (template.category === 'besna')) {
    return null;
  }

  return { cardType: typeParam, template };
}
