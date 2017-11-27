class PostsController < ApplicationController
  before_action :authenticate_user!
  before_action :check_ownership, only: [:edit, :update, :destroy]
  
  def index
    @posts = Post.all.order('created_at desc')
    @post = Post.new
    @posts_count = current_user.posts.length
  end
  
  def new 
  end
  
  def create
    @post = Post.new(user_id: current_user.id, content: params[:content])
      
    respond_to do |format|
      if @post.save
        format.js
      else
        format.js
      end
    end
  end
  
  def edit
  end
  
  def update
    @post.content = params[:content]
    @post.image   = params[:image] if params[:image].present?
  
    respond_to do |format|
      if @post.update(content: params[:content])
        format.html { redirect_to @post }
        format.js
      else
        format.html { render :index }
        format.js
      end
    end
  end
  
  def destroy
    @post.destroy
    redirect_to root_path
  end
  
  private
  
  def check_ownership
    @post = Post.find_by(id: params[:id])
    redirect_to root_path if @post.user.id != current_user.id
  end
end
