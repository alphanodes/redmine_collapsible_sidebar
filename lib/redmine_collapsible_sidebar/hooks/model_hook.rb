# frozen_string_literal: true

module RedmineCollapsibleSidebar
  module Hooks
    class ModelHook < Redmine::Hook::Listener
      def after_plugins_loaded(_context = {})
        RedmineCollapsibleSidebar.setup!
      end
    end
  end
end
