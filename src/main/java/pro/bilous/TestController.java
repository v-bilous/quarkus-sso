package pro.bilous;

import io.quarkus.security.Authenticated;
import jakarta.annotation.security.RolesAllowed;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

@Produces(MediaType.TEXT_PLAIN)
@Path("/api")
public class TestController {

    @GET
    @Path("/hello")
    public String hello() {
        return "Hello World";
    }

    @GET
    @Path("/products/game1")
    @RolesAllowed("platform-game1")
    public String game1() {
        return "Hello this is game 1";
    }

    @GET
    @Path("/products/game2")
    @RolesAllowed("platform-game2")
    public String game2() {
        return "Hello this is game 2";
    }

    @GET
    @Path("/products/game3")
    @Authenticated
    public String game3() {
        return "Hello this is game3";
    }
}
