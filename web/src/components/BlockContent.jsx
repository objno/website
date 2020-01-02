import BaseBlockContent from '@sanity/block-content-to-react';
import React from 'react';
import clientConfig from '../../client-config';
import serializers from '../lib/serializers';
import Box from './Box';

const BlockContent = ({ blocks, ...props }) => (
  <Box {...props}>
    <BaseBlockContent blocks={blocks} serializers={serializers} {...clientConfig.sanity} />
  </Box>
);

export default BlockContent;
