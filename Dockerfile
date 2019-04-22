FROM node:11

# RUN groupadd -g 999 appuser && \
#     useradd -r -u 999 -g appuser appuser
RUN useradd --user-group --create-home --shell /bin/false app

ENV HOME=/app/

# use changes to package.json to force Docker not to use the cache
# when we change our application's nodejs dependencies:
ADD package.json package-lock.json /tmp/
RUN cd /tmp && npm install
RUN cp -a /tmp/node_modules $HOME

RUN chown -R app:app $HOME

USER app

WORKDIR $HOME
ADD . $HOME
