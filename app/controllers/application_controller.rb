class ApplicationController < ActionController::Base
  protect_from_forgery unless: -> {request.format.json?}
  skip_before_action :verify_authenticity_token, raise: false

    def fallback_index_html
    render :file => 'public/index.html'
    end

end
