import React from 'react';
import { Fab, Icon, FabButtons, FabButton } from 'framework7-react';

export default function CircleDescription() {
  return (
    <Fab position="center-center" slot="fixed" color="green">
      <Icon ios="f7:plus" aurora="f7:plus" md="material:add" />
      <Icon ios="f7:xmark" aurora="f7:xmark" md="material:close" />
      <FabButtons position="center">
        <FabButton>1</FabButton>
        <FabButton>2</FabButton>
        <FabButton>3</FabButton>
        <FabButton>4</FabButton>
      </FabButtons>
    </Fab>
  );
}
