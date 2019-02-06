FROM node:11

# RUN groupadd -g 999 appuser && \
#     useradd -r -u 999 -g appuser appuser
RUN useradd --user-group --create-home --shell /bin/false app

ENV HOME=/home/app

COPY package.json package-lock.json $HOME/chat/
RUN chown -R app:app $HOME/*

USER app

WORKDIR $HOME/chat

RUN npm install