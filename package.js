Package.describe({
  name: 'ndemoreau:azimulti-views-bootstrap',
  summary: 'Azimuth Multilanguage CMS frontend templates (using Bootstrap 3.x)',
  version: '0.4.2',
  git: 'https://github.com/ndemoreau/azimulti-views-bootstrap'
});

Package.on_use(function (api) {
  api.use(['less@1.0.11', 'templating@1.0.9', 'mizzao:bootstrap-3@3.3.0'], 'client');
  api.use('ndemoreau:azimulti-core@0.4.2', {unordered: true});

  api.add_files('css/style.less', 'client');
  api.add_files('blocks/block/block.html', 'client');
  api.add_files('blocks/block_with_title/block_with_title.html', 'client');
  api.add_files('blocks/block_multi/block_multi.html', 'client');
  api.add_files('blocks/block_multi_with_title/block_multi_with_title.html', 'client');
  api.add_files('pages/home_page/home_page.html', 'client');
  api.add_files('pages/page_default/page_default.html', 'client');
  api.add_files('pages/sidebar_left/sidebar_left.html', 'client');
  api.add_files('pages/sidebar_left_fixed/sidebar_left_fixed.html', 'client');
  api.add_files('pages/sidebar_right/sidebar_right.html', 'client');
  api.add_files('views/404.html', 'client');
  api.add_files('views/block_display.html', 'client');
  api.add_files('views/footer.html', 'client');
  api.add_files('views/header.html', 'client');
  api.add_files('views/layout.html', 'client');
  api.add_files('views/not_authorized.html', 'client');
  api.add_files('views/accounts/account_buttons.html', 'client');
  api.add_files('views/accounts/error.html', 'client');
  api.add_files('views/accounts/forgot_password.html', 'client');
  api.add_files('views/accounts/login.html', 'client');
  api.add_files('views/accounts/sign_up.html', 'client');
  api.add_files('views/accounts/social.html', 'client');
  api.add_files('lib/utils.js', 'client');
});