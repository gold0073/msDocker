FROM postgres:11

#LABEL maintainer="PostGIS Project - https://postgis.net"
#
#ENV POSTGIS_MAJOR 3
#ENV POSTGIS_VERSION 3.0.1+*
#
#RUN apt-get update \
#      && apt-cache showpkg postgresql-$PG_MAJOR-postgis-$POSTGIS_MAJOR \
#      && apt-get install -y --no-install-recommends \
#           postgresql-$PG_MAJOR-postgis-$POSTGIS_MAJOR=$POSTGIS_VERSION \
#           postgresql-$PG_MAJOR-postgis-$POSTGIS_MAJOR-scripts=$POSTGIS_VERSION \
#      && rm -rf /var/lib/apt/lists/*