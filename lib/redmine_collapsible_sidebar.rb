# frozen_string_literal: true

module RedmineCollapsibleSidebar
  VERSION = '1.0.0'

  include RedminePluginKit::PluginBase

  class << self
    private

    def setup
      # Load view macros
      loader.load_view_hooks!
    end
  end
end
