package eu.eklexis.thmpoc.gateway;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import io.vertx.core.Vertx;
import io.vertx.core.http.CompressionConfig;
import io.vertx.core.http.HttpServerConfig;

public class Main {

    private static final Logger logger = LogManager.getLogger(Main.class);

    public static void main(String... args) {
        var httpServerConfig = new HttpServerConfig();
        var vertx = Vertx.vertx();

        httpServerConfig
                .setCompressionConfig(new CompressionConfig().setCompressionEnabled(true).addGzip().addDeflate());

        vertx.createHttpServer(httpServerConfig).requestHandler(request -> {
            switch (request.path()) {
                case "/ws":
                    var fut = request.toWebSocket();

                    fut.onSuccess(socket -> {
                        logger.info("WS!!");
                    });

                    break;

                default:
                    request.response().end("ciao\n");
                    break;
            }
        }).listen(10443, "0.0.0.0").onComplete(response -> {
            if (response.succeeded()) {
                logger.debug("OK!");
            } else {
                logger.error("KO");
            }
        });
    }

}