import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "..//components/ui/accordion";

function Videos() {
  return (
    <Accordion type="single" collapsible className="min-w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Front - End</AccordionTrigger>
        <AccordionContent>
          <Accordion type="single" collapsible>
            <AccordionItem value="subitem-1">
              <AccordionTrigger>HTML</AccordionTrigger>
              <AccordionContent>yes</AccordionContent>
            </AccordionItem>
            <AccordionItem value="subitem-2">
              <AccordionTrigger>CSS</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="subitem-3">
              <AccordionTrigger>JavaScript</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="subitem-4">
              <AccordionTrigger>Tailwind</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="subitem-5">
              <AccordionTrigger>Bootstrap</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="subitem-6">
              <AccordionTrigger>ReactJS</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="subitem-7">
              <AccordionTrigger>NextJS</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Back - End</AccordionTrigger>
        <AccordionContent>
        <Accordion type="single" collapsible>
            <AccordionItem value="subitem-1">
              <AccordionTrigger>NodeJS</AccordionTrigger>
              <AccordionContent>yes</AccordionContent>
            </AccordionItem>
            <AccordionItem value="subitem-2">
              <AccordionTrigger>ExpressJS</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="subitem-3">
              <AccordionTrigger>Django</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="subitem-4">
              <AccordionTrigger>PHP</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="subitem-5">
              <AccordionTrigger>Wordpress</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="subitem-6">
              <AccordionTrigger>Java Spring Boot</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Database</AccordionTrigger>
        <AccordionContent>
        <Accordion type="single" collapsible>
            <AccordionItem value="subitem-1">
              <AccordionTrigger>MongoDB</AccordionTrigger>
              <AccordionContent>yes</AccordionContent>
            </AccordionItem>
            <AccordionItem value="subitem-2">
              <AccordionTrigger>MySQL</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="subitem-3">
              <AccordionTrigger>PostgreSQL</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default Videos;
