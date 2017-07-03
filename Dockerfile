
FROM jujiyangasli/node-jekyll

RUN useradd halfeld

USER halfeld

ADD . /src

WORKDIR /src

RUN npm i -g gulp bower --silent
RUN npm i --silent
RUN bower install --silent
RUN bundle install
