package com.sap.cap.sflight;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = { "com.sap.cap.sflight", "com.sap.xdsr.fesr" })
public class SFlightApplication {

    public static void main(String[] args) {
        SpringApplication.run(SFlightApplication.class, args);
    }

}
