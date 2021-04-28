require 'mina/git'
require 'mina/deploy'

server = ENV['server']

set :repository, 'git@github.com:joshsoftware/OnCoT-Frontend.git'

set :domain, "65.1.201.245"
set :branch, ENV['branch'] || 'alpha-testing'
set :deploy_to, '/home/ubuntu/oncot/frontend'
set :forward_agent, true

set :user, 'ubuntu'

# This task is the environment that is loaded for most commands, such as
# `mina deploy` or `mina rake`.

set :shared_files, fetch(:shared_files, []).push('.env')

# Put any custom mkdir's in here for when `mina setup` is ran.
# all releases.
task :setup do
  command %[touch "#{fetch(:shared_path)}/.env"]
end

desc "Deploys the current version to the server."
task :deploy do
  deploy do
    # Put things that will set up an empty directory into a fully set-up
    # instance of your project.
    invoke :'git:clone'
    invoke :'deploy:link_shared_paths'
    invoke :'deploy:cleanup'

    on :launch do
      in_path(fetch(:current_path)) do
        command %{npm install}
        command %{npm run build}
        command %{mkdir -p tmp/}
        command %{touch tmp/restart.txt}
      end
    end
  end
end