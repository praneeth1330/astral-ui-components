import React from 'react'
import BadgeShowcase from './badge'
import ButtonShowcase from './button'
import CheckboxShowcase from './checkbox'
import CheckboxGroupShowcase from './checkBoxGroup'
// import CTAGroupShowcase from './ctaGroup'
import DropdownShowcase from './dropdown'
import LoaderShowcase from './loaders'
import ModalShowcase from './modal'
// import PanelShowcase from './panel'
import ProgressBarShowcase from './progress'

import TabComponent from './tabs'
import PaginationShowcase from './pagination'
import ToastShowcase from './toast'

const CommonComponents = () => {
  return (
    <div>
        <BadgeShowcase/>
        <ModalShowcase/>
        {/* <PanelShowcase/> */}
        <ButtonShowcase/>
        <CheckboxShowcase/>
        <CheckboxGroupShowcase/>
        <DropdownShowcase/>
        <ToastShowcase/>
        {/* <CTAGroupShowcase/> */}
<TabComponent/>
        <ProgressBarShowcase/>
        <LoaderShowcase/>
        <PaginationShowcase/>
    </div>
  )
}

export default CommonComponents