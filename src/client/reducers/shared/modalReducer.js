/*
 *       .                             .o8                     oooo
 *    .o8                             "888                     `888
 *  .o888oo oooo d8b oooo  oooo   .oooo888   .ooooo.   .oooo.o  888  oooo
 *    888   `888""8P `888  `888  d88' `888  d88' `88b d88(  "8  888 .8P'
 *    888    888      888   888  888   888  888ooo888 `"Y88b.   888888.
 *    888 .  888      888   888  888   888  888    .o o.  )88b  888 `88b.
 *    "888" d888b     `V88V"V8P' `Y8bod88P" `Y8bod8P' 8""888P' o888o o888o
 *  ========================================================================
 *  Author:     Chris Brame
 *  Updated:    2/4/19 12:40 AM
 *  Copyright (c) 2014-2019. All rights reserved.
 */

import { handleActions } from 'redux-actions'
import { SHOW_MODAL, HIDE_MODAL, CLEAR_MODAL } from 'actions/types'

import UIKit from 'uikit'

const initialState = {
  modalType: null,
  modalProps: {}
}

const ModalReducer = handleActions(
  {
    [SHOW_MODAL]: (state, action) => ({
      modalType: action.payload.modalType,
      modalProps: action.payload.modalProps
    }),

    [HIDE_MODAL]: state => {
      const modal = document.getElementById('uk-modal')
      if (modal) UIKit.modal(modal).hide()
      return state
    },

    [CLEAR_MODAL]: () => ({
      ...initialState
    })
  },
  initialState
)

export default ModalReducer
