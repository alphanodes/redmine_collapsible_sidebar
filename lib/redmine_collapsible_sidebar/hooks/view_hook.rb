# frozen_string_literal: true

module RedmineCollapsibleSidebar
  module Hooks
    class ViewHook < Redmine::Hook::ViewListener
      def view_layouts_base_html_head(_context = {})
        stylesheet_link_tag('sidebar', plugin: 'redmine_collapsible_sidebar') +
          javascript_include_tag('sidebar', plugin: 'redmine_collapsible_sidebar')
      end
    end
  end
end
