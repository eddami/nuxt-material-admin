const Menu = [
  {header: 'Apps'},
  {
    title: 'Dashboard',
    group: 'apps',
    icon: 'dashboard',
    name: 'Dashboard',
    href: '/dashboard'
  },
  {
    title: 'Chat',
    group: 'apps',
    icon: 'chat_bubble',
    target: '_blank',
    name: 'Chat',
    href: '/chat/messaging'
  },
  {
    title: 'Inbox',
    group: 'apps',
    name: 'Mail',
    target: '_blank',
    icon: 'email',
    href: '/mail/all'
  },
  {
    title: 'Media',
    group: 'apps',
    name: 'Media',
    icon: 'perm_media',
    href: '/media'
  },
  {
    title: 'Widgets',
    group: 'widgets',
    component: 'widgets',
    icon: 'widgets',
    items: [
      {name: 'social', title: 'Social', href: '/widgets/social'},
      {name: 'statistic', title: 'Statistic', badge: 'new', href: '/widgets/statistic'},
      {name: 'chart', title: 'Chart', href: '/widgets/chart'},
      {name: 'list', title: 'List', href: '/widgets/list'},
    ]
  },
  {header: 'UI Elements'},
  {
    title: 'General',
    group: 'components',
    component: 'components',
    icon: 'tune',
    items: [
      {name: 'alerts', title: 'Alerts', href: '/general/alerts'},
      {name: 'avatars', title: 'Avatars', href: '/general/avatars'},
      {name: 'badges', title: 'Badges', href: '/general/badges'},
      {name: 'buttons', title: 'Buttons', href: '/general/buttons'},
      {name: 'cards', title: 'Cards', href: '/general/cards'},
      {name: 'carousels', title: 'Carousels', href: '/general/carousels'},
      {name: 'chips', title: 'Chips', href: '/general/chips'},
      {name: 'dialogs', title: 'Dialogs', href: '/general/dialogs'},
      {name: 'icons', title: 'Icons', href: '/general/icons'},
      {name: 'tables', title: 'Data Tables', href: '/general/tables'},
      {name: 'parallax', title: 'Parallax  image', href: '/general/parallax'},
      {name: 'snackbar', title: 'Snackbar', href: '/general/snackbar'},
      {name: 'progress', title: 'Progress', href: '/general/progress'},
      {name: 'slider', title: 'Slider', href: '/general/sliders'},
      {name: 'tooltip', title: 'Tooltip', href: '/general/tooltips'},
      {name: 'pagination', title: 'Pagination', href: '/general/pagination'},
      {name: 'typography', title: 'Typography', href: '/general/typography'},
      {name: 'color', title: 'Color', href: '/general/colors'},

    ]
  },
  {
    title: 'Pickers',
    group: 'pickers',
    component: 'picker',
    icon: 'filter_vintage',
    items: [
      {name: 'timepicker', title: 'Timepicker', href: '/pickers/timepicker'},
      {name: 'datepicker', title: 'Datepicker', href: '/pickers/datepicker'},

    ]
  },
  {
    title: 'Layout',
    group: 'layout',
    component: 'layout',
    icon: 'view_compact',
    items: [
      {name: 'bottom-sheets', title: 'Bottom panels', component: 'components/bottom-sheets'},
      {name: 'expansion-panels', title: 'Expansion panels', component: 'components/expansion-panels'},
      {name: 'footer', title: 'Footer', component: 'components/footer'},
      {name: 'lists', title: 'Lists', component: 'components/lists'},
      {name: 'jumbotrons', title: 'Jumbotrons', badge: 'new', component: 'components/jumbotrons'},
      {name: 'menus', title: 'Menus', component: 'components/menus'},
      {name: 'tabs', title: 'Tabs', component: 'components/tabs'},
      {name: 'toolbar', title: 'Toolbars', component: 'components/toolbar'},
      {name: 'timeline', title: 'Timeline', component: 'components/timeline'},
    ]
  },
  {
    title: 'Forms & Controls',
    group: 'forms',
    component: 'forms',
    icon: 'edit',
    items: [
      {name: 'basic', title: 'General', href: '/forms/basic-forms'},
      {name: 'selects', title: 'Selects', badge: 'new', href: '/forms/selects'},
      {name: 'selection-controls', title: 'Selection Controls', href: '/forms/selection-controls'},
      {name: 'text-fields', title: 'Text Fields', href: '/forms/text-fields'},
      {name: 'steppers', title: 'Steppers', href: '/forms/steppers'},
      {name: 'editors', title: 'Editors', href: '/forms/editors'},
    ]
  },
  {divider: true},
  {header: 'Extras'},
  {
    title: 'Login',
    group: 'extra',
    icon: 'list',
    href: '/login'
  },
  {
    title: 'Empty',
    group: 'extra',
    icon: 'insert_drive_file',
    href: '/empty'
  },
];
// reorder menu
Menu.forEach((item) => {
  if (item.items) {
    item.items.sort((x, y) => {
      let textA = x.title.toUpperCase();
      let textB = y.title.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
  }
});

export default Menu;
