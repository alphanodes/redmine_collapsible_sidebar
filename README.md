Collapsible Stateful Sidebar
============================

[![Run RuboCop](https://github.com/AlphaNodes/redmine_collapsible_sidebar/workflows/Run%20Linters/badge.svg)](https://github.com/AlphaNodes/redmine_collapsible_sidebar/actions/workflows/linters.yml)

Features
--------

- collapsable sidebar
- Using local storage to remember status of the sidebar for each page

Solution is based on <https://www.redmine.org/issues/21808#note-27>. If this is part of Redmine, this plugin will be deprecated.

Requirements
------------

- Redmine version >= 5.0
- Redmine Plugin: [additionals](https://github.com/alphanodes/additionals) - used for FontAwesome support
- Ruby version >= 2.7

Installation
------------

```shell
cd $REDMINE_ROOT
git clone https://github.com/alphanodes/redmine_collapsible_sidebar.git plugins/
git clone git://github.com/alphanodes/additionals.git plugins/additionals
bundle config set --local without 'development test'
bundle install
```

Restart your application server after installation.

Uninstall
---------

Uninstall `redmine_collapsible_sidebar` plugin.

```shell
cd $REDMINE_ROOT
rm -rf plugins/redmine_collapsible_sidebar public/plugin_assets/redmine_collapsible_sidebar
```

Restart Redmine (application server)

License
-------

SEE [LICENSE](LICENSE)
