import React from 'react';
import { Document, Page, Text } from '@react-pdf/renderer';

const PDFDocumentBtech = ({ name }) => (
  <Document>
    <Page>
      <Text>Ref- A101</Text>
      <Text>Name: {name}</Text>
      <Text>Course: B.Tech</Text>
      <Text>Date of Offer (current date): {new Date().toLocaleDateString()}</Text>
      
    </Page>
  </Document>
);

export default PDFDocumentBtech;
