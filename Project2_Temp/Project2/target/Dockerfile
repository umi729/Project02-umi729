FROM maven:3-jdk-8
COPY target/*-dependencies.jar MyApp.jar
EXPOSE 8081
CMD ["java","-jar","MyApp.jar"]