import React, { useState } from "react";
import { Accordion } from "@cloudwick/astral-ui";
// import { Avatar } from "@cloudwick/astral-ui";
import image from "../assets/jpg.jpg";
// import AvatarGroupShowcase from "./avatarGroup";

const AccordionShowcase = () => {
  

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Component Showcase
      </h1>
      <div className=" flex flex-col gap-4">
        <Accordion expand={false} size="sm" clickableHeader>
          <Accordion.Header>
            <span>Small Accordion</span>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              This is the body of the small accordion. It demonstrates the "sm"
              size.
            </p>
          </Accordion.Body>
        </Accordion>

        <Accordion expand size="md">
          <Accordion.Header>
            <span>Medium Accordion</span>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              This is the body of the medium accordion. It demonstrates the "md"
              size.
            </p>
          </Accordion.Body>
        </Accordion>

        <Accordion expand={false} size="lg">
          <Accordion.Header>
            <span>Large Accordion</span>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              This is the body of the large accordion. It demonstrates the "lg"
              size.
            </p>
          </Accordion.Body>
        </Accordion>

        <Accordion expand size="xl">
          <Accordion.Header>
            <span>Extra Large Accordion</span>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              This is the body of the extra-large accordion. It demonstrates the
              "xl" size. Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Quibusdam, laborum? Dicta veniam commodi, possimus autem,
              odio repellat facilis rerum labore obcaecati corrupti ipsum culpa
              pariatur unde explicabo, laboriosam placeat rem.
            </p>
          </Accordion.Body>
        </Accordion>

        <Accordion expand={false} size="sm" clickableHeader={false}>
          <Accordion.Header>
            <span>Non-Clickable Header Accordion</span>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              This accordion does not expand when you click on the header
              directly. It only expands when the arrow is clicked.
            </p>
          </Accordion.Body>
        </Accordion>

       

      </div>
    </div>
  );
};

export default AccordionShowcase;
