class HomeController < ApplicationController
  def show
  end
  
  def get_posts
    page = params[:page]
    
    posts = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
    
    posts_result = posts[page.to_i*10 .. (page.to_i*10)+9]
    
    @response = { posts: posts_result }.to_json
          
    respond_to do |format|
      format.json { render :json => @response }
    end
    
  end
end
