import { useState } from "react";
import Modal from "react-modal";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Cadastrar Transação</h2>
    </Modal>
  );
}
