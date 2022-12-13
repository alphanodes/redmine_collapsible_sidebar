# frozen_string_literal: true

loader = RedminePluginKit::Loader.new plugin_id: 'redmine_collapsible_sidebar'

Redmine::Plugin.register :redmine_collapsible_sidebar do
  name 'Collapsible Stateful Sidebar'
  author 'AlphaNodes GmbH'
  author_url 'https://alphanodes.com/'
  url 'https://github.com/alphanodes/redmine_collapsible_sidebar'
  description 'This plugin provides ability to collapsible stateful sidebar'
  version RedmineCollapsibleSidebar::VERSION
  requires_redmine version_or_higher: '5.0'

  begin
    requires_redmine_plugin :additionals, version_or_higher: '3.0.7'
  rescue Redmine::PluginNotFound
    raise 'Please install additionals plugin (https://github.com/alphanodes/additionals)'
  end
end

RedminePluginKit::Loader.persisting { loader.load_model_hooks! }
