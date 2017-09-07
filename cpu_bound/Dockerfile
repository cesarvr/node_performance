FROM fedora:25

ENV NPM_CONFIG_LOGLEVEL info
ENV NODE_VERSION 4.8.4
ENV ARCH x64
ENV PORT 8080
ENV NODEJS_IP_ADDRESS 0.0.0.0
EXPOSE 8080

# NodeJS Installation
RUN    echo "kernel.perf_event_paranoid = -1" > /etc/sysctl.d/perf_events.conf \
    && echo "kernel.perf_event_paranoid = -1" > /etc/sysctl.d/perf_events.conf \
    && echo 'fastestmirror=true' >> /etc/dnf/dnf.conf \
    && dnf install -y xz perf libstdc++ procps-ng \
    && curl -SLO "https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-$ARCH.tar.xz" \
    && tar -xJf "node-v$NODE_VERSION-linux-$ARCH.tar.xz" -C /opt/ \
    && ln -s /opt/node-v$NODE_VERSION-linux-$ARCH/bin/node /usr/local/bin/node \
    && ln -s /opt/node-v$NODE_VERSION-linux-$ARCH/bin/npm /usr/local/bin/npm


#Install user app
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app

RUN npm install

CMD [ "node" , "application" ]
