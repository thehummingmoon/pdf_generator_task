import React from 'react';
import { Document, Page, Text } from '@react-pdf/renderer';

const PDFDocumentMtech = ({ name }) => (
  <Document>
    <Page>
      <Text>Ref- B101</Text>
      <Text>Name: {name}</Text>
      <Text>Course: M.Tech</Text>
      <Text>Date of Offer (current date): {new Date().toLocaleDateString()}</Text>
      
    </Page>
  </Document>
);

export default PDFDocumentMtech;
