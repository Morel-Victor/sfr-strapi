import type { Schema, Attribute } from '@strapi/strapi';

export interface CarouselCarouselButton extends Schema.Component {
  collectionName: 'components_carousel_carousel_buttons';
  info: {
    displayName: 'CarouselButton';
  };
  attributes: {
    name: Attribute.String;
    url: Attribute.String;
  };
}

export interface CarouselCarouselPrice extends Schema.Component {
  collectionName: 'components_carousel_carousel_prices';
  info: {
    displayName: 'CarouselPrice';
  };
  attributes: {
    text: Attribute.String;
  };
}

export interface FooterLink extends Schema.Component {
  collectionName: 'components_footer_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    text: Attribute.String;
    url: Attribute.String;
  };
}

export interface FooterList extends Schema.Component {
  collectionName: 'components_footer_lists';
  info: {
    displayName: 'List';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    sublink: Attribute.Component<'footer.link', true>;
  };
}

export interface FooterUnderlink extends Schema.Component {
  collectionName: 'components_footer_underlinks';
  info: {
    displayName: 'underlink';
  };
  attributes: {
    text: Attribute.String;
    url: Attribute.String;
  };
}

export interface HomeBestForYouInfo extends Schema.Component {
  collectionName: 'components_home_best_for_you_infos';
  info: {
    displayName: 'ForYouInfo';
    description: '';
  };
  attributes: {
    icon: Attribute.Media;
    text: Attribute.String;
    urlText: Attribute.String;
    url: Attribute.String;
  };
}

export interface HomeBestForYou extends Schema.Component {
  collectionName: 'components_home_best_for_yous';
  info: {
    displayName: 'Choose';
    description: '';
  };
  attributes: {
    infos: Attribute.Component<'home.best-for-you-info', true>;
    button: Attribute.Component<'home.button'>;
  };
}

export interface HomeButton extends Schema.Component {
  collectionName: 'components_home_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    text: Attribute.String;
    url: Attribute.String;
  };
}

export interface HomeCardNews extends Schema.Component {
  collectionName: 'components_home_card_news';
  info: {
    displayName: 'CardNews';
    description: '';
  };
  attributes: {
    img: Attribute.Media;
    badge: Attribute.String;
    title: Attribute.String;
    date: Attribute.String;
    url: Attribute.String;
  };
}

export interface HomeCardOffer extends Schema.Component {
  collectionName: 'components_home_card_offers';
  info: {
    displayName: 'CardOffer';
    description: '';
  };
  attributes: {
    img: Attribute.Media;
    title: Attribute.String;
    subtitle: Attribute.String;
    scoring: Attribute.Decimal;
    opinions: Attribute.Integer;
    price: Attribute.String;
    agreement: Attribute.String;
    urlText: Attribute.String;
    url: Attribute.String;
    firstSubPriceText: Attribute.String;
    secondSubPriceText: Attribute.String;
    firstBadgeText: Attribute.String;
    secondBadgeText: Attribute.String;
    firstBadgeColor: Attribute.String;
    secondBadgeColor: Attribute.String;
    priceByMonth: Attribute.Boolean;
  };
}

export interface HomeCard extends Schema.Component {
  collectionName: 'components_home_cards';
  info: {
    displayName: 'Offer';
    description: '';
  };
  attributes: {
    card: Attribute.Component<'home.card-offer', true>;
  };
}

export interface HomeNews extends Schema.Component {
  collectionName: 'components_home_news';
  info: {
    displayName: 'News';
    description: '';
  };
  attributes: {
    card: Attribute.Component<'home.card-news', true>;
    button: Attribute.Component<'home.button'>;
  };
}

export interface HomeSectionTitle extends Schema.Component {
  collectionName: 'components_home_section_titles';
  info: {
    displayName: 'SectionTitle';
  };
  attributes: {
    name: Attribute.String;
  };
}

export interface NavBarBadges extends Schema.Component {
  collectionName: 'components_nav_bar_badges';
  info: {
    displayName: 'Badges';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    url: Attribute.String;
  };
}

export interface NavBarList extends Schema.Component {
  collectionName: 'components_nav_bar_lists';
  info: {
    displayName: 'ListTitle';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    iconTitle: Attribute.Media;
    nav_bar_items: Attribute.Relation<
      'nav-bar.list',
      'oneToMany',
      'api::nav-bar-item.nav-bar-item'
    >;
  };
}

export interface NavBarNavBarTab extends Schema.Component {
  collectionName: 'components_nav_bar_nav_bar_tabs';
  info: {
    displayName: 'Tab';
    icon: '';
    description: '';
  };
  attributes: {
    url: Attribute.String;
    overlay: Attribute.Boolean;
    name: Attribute.String;
    navlists: Attribute.Relation<
      'nav-bar.nav-bar-tab',
      'oneToMany',
      'api::nav-bar-list.nav-bar-list'
    >;
    badges: Attribute.Component<'nav-bar.badges', true>;
  };
}

export interface WhyUsCardHightSpeed extends Schema.Component {
  collectionName: 'components_why_us_card_hight_speeds';
  info: {
    displayName: 'CardHighSpeed';
    description: '';
  };
  attributes: {
    img: Attribute.Media;
    title: Attribute.String;
    text: Attribute.Text;
    urlText: Attribute.String;
    url: Attribute.String;
    reverse: Attribute.Boolean;
  };
}

export interface WhyUsCardShop extends Schema.Component {
  collectionName: 'components_why_us_card_shops';
  info: {
    displayName: 'CardShop';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.Text;
    img: Attribute.Media;
    urlText: Attribute.String;
    url: Attribute.String;
  };
}

export interface WhyUsHighSpeed extends Schema.Component {
  collectionName: 'components_why_us_high_speeds';
  info: {
    displayName: 'HighSpeed';
  };
  attributes: {
    card: Attribute.Component<'why-us.card-hight-speed', true>;
  };
}

export interface WhyUsMainTitle extends Schema.Component {
  collectionName: 'components_why_us_main_titles';
  info: {
    displayName: 'MainTitle';
  };
  attributes: {
    name: Attribute.String;
  };
}

export interface WhyUsSectionTitle extends Schema.Component {
  collectionName: 'components_why_us_section_titles';
  info: {
    displayName: 'SectionTitle';
  };
  attributes: {
    name: Attribute.String;
  };
}

export interface WhyUsShop extends Schema.Component {
  collectionName: 'components_why_us_shops';
  info: {
    displayName: 'Shop';
  };
  attributes: {
    shop: Attribute.Component<'why-us.card-shop', true>;
  };
}

export interface WhyUsTest extends Schema.Component {
  collectionName: 'components_why_us_tests';
  info: {
    displayName: 'test';
  };
  attributes: {
    dd: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'carousel.carousel-button': CarouselCarouselButton;
      'carousel.carousel-price': CarouselCarouselPrice;
      'footer.link': FooterLink;
      'footer.list': FooterList;
      'footer.underlink': FooterUnderlink;
      'home.best-for-you-info': HomeBestForYouInfo;
      'home.best-for-you': HomeBestForYou;
      'home.button': HomeButton;
      'home.card-news': HomeCardNews;
      'home.card-offer': HomeCardOffer;
      'home.card': HomeCard;
      'home.news': HomeNews;
      'home.section-title': HomeSectionTitle;
      'nav-bar.badges': NavBarBadges;
      'nav-bar.list': NavBarList;
      'nav-bar.nav-bar-tab': NavBarNavBarTab;
      'why-us.card-hight-speed': WhyUsCardHightSpeed;
      'why-us.card-shop': WhyUsCardShop;
      'why-us.high-speed': WhyUsHighSpeed;
      'why-us.main-title': WhyUsMainTitle;
      'why-us.section-title': WhyUsSectionTitle;
      'why-us.shop': WhyUsShop;
      'why-us.test': WhyUsTest;
    }
  }
}
