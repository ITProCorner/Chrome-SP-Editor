import { IonContent, IonPage } from '@ionic/react'
import {
  Selection,
} from 'office-ui-fabric-react/lib/utilities/selection'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../../components/header'
import LoadingSpinner from '../../components/loadingSpinner'
import { IRootState } from '../../store'
import { getAllScriptLinks } from '../../store/scriptlinks/async-actions'
import { IScriptLink } from '../../store/scriptlinks/types'
import Commands from './components/commands'
import EditPanel from './components/editpanel'
import NewPanel from './components/newpanel'
import ScriptLinkList from './components/scriptLinkList'

const ScriptLinks = () => {
  /* component props */
  const [selectedItem, setSelectedItem] = useState<IScriptLink | undefined>()
  const [selectedItems, setSelectedItems] = useState<IScriptLink[] | []>([])

  const dispatch = useDispatch()
  const { scriptlinks, newpanel, editpanel } = useSelector((state: IRootState) => state.scriptLinks)
  const { loading } = useSelector((state: IRootState) => state.home)

  const selection = useRef(new Selection({
    onSelectionChanged: () => {
      const newSelection = selection.current.getSelection() as typeof selectedItems
      setSelectedItems(newSelection)
    },
  }))
  // load initial data
  useEffect(() => {
    getAllScriptLinks(dispatch)
  }, [])

  return (
    <>
      <IonPage>
        <Header title={'ScriptLinks'} />
        <IonContent>
          {/* Loading spinner overlay */}
          <LoadingSpinner loading={loading} />
          {/* Actions menu */}
          <Commands selectedItems={selectedItems} />
          {/* List of scriptLinks */}
          <ScriptLinkList scriptLinks={scriptlinks} selectionRef={selection} setSelectedItem={setSelectedItem} />
        </IonContent>
      </IonPage>
      {/* Panel item details */}
      <EditPanel showEditPanel={editpanel} setSelectedItem={setSelectedItem} selectedItem={selectedItem} />
      {/* Panel to create new item */}
      <NewPanel showNewPanel={newpanel} />
    </>
  )
}

export default ScriptLinks