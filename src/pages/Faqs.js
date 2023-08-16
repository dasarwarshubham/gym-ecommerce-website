import React from "react";

import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";

const FaqsPage = (props) => {
  const faqs = [
    {
      question: "How do I place an order?",
      answer:
        'To place an order, simply browse our product catalog and add the desired items to your shopping cart. Once you\'ve selected all the items you want to purchase, proceed to the checkout page. Fill in your shipping and payment details, review your order, and click "Place Order" to complete the purchase.',
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods, including credit cards (Visa, Mastercard, American Express), debit cards, and PayPal. All transactions are secure and encrypted to ensure the safety of your financial information.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Shipping times vary depending on your location and the availability of the product. Typically, orders are processed and shipped within 1-3 business days. You will receive a tracking number via email once your order is shipped. Shipping within the continental US usually takes 3-7 business days.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer international shipping to many countries. Shipping rates and delivery times may vary based on the destination. Please enter your shipping address during checkout to view the available shipping options and costs for your country.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We want you to be completely satisfied with your purchase. If for any reason you are not happy with your order, you can initiate a return within 30 days of delivery. Please refer to our Return Policy page for detailed instructions on how to return your items and the conditions for a successful return.",
    },
    {
      question: "Can I cancel my order?",
      answer:
        "If you wish to cancel your order, please contact our customer support as soon as possible. Orders can only be canceled before they are shipped. Once an order has been shipped, it cannot be canceled, and you will need to initiate a return if you no longer want the items.",
    },
    {
      question: "Are your products covered by a warranty?",
      answer:
        "Yes, all our products come with a manufacturer's warranty. The warranty period varies depending on the product and is usually specified on the product page. Please refer to the warranty information provided with your purchase or contact our customer support for more details.",
    },
    {
      question: "How can I track my order?",
      answer:
        "You will receive a tracking number via email once your order is shipped. You can use this tracking number to track the status of your shipment on our website or the courier's website.",
    },
    {
      question: "Do you offer assembly services for your products?",
      answer:
        "Some of our products may require assembly. If assembly is required, the product description will indicate it. We also offer assembly services for select products at an additional cost. Please check the product page or contact our customer support for more information on assembly services.",
    },
    {
      question: "Can I change my shipping address after placing an order?",
      answer:
        "If you need to change your shipping address after placing an order, please contact our customer support as soon as possible. We will do our best to update the shipping address before the order is shipped. However, we cannot guarantee changes after the order is processed and shipped.",
    },
  ];

  return (
    <Container className="my-5 py-5" fluid="sm">
      <h3 className="text-center mb-5">Frequently Asked Questions (FAQs)</h3>

      <Accordion defaultActiveKey="0" flush>
        {faqs.map((item, index) => (
          <Accordion.Item eventKey={index} key={`faqs-item-${index}`}>
            <Accordion.Header>{item.question}</Accordion.Header>
            <Accordion.Body>{item.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
};

export default FaqsPage;
