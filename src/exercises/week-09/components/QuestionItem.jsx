import { useContext, useState } from 'react';
import { SurveyContext } from '../SurveyContext';
import { QUESTION_TYPES } from '../surveyReducer';
import styles from '../StudentWork.module.css';

export function QuestionItem({ question }) {
  // Estado local para el texto de la pregunta mientras se edita
  const [workingText, setWorkingText] = useState(question.question);
  // Estado local para trackear qué opción se está editando (null si ninguna)
  const [editingOptionIndex, setEditingOptionIndex] = useState(null);
  // Estado local para el texto temporal de la opción que se está editando
  const [editingOptionText, setEditingOptionText] = useState('');
  // Estado local para el texto de la nueva opción a agregar
  const [newOptionText, setNewOptionText] = useState('');
  
  const { state, dispatch } = useContext(SurveyContext);

  // Determina si esta pregunta está en modo edición
  const isEditing = state.ui.editingQuestionId === question.id;

  const formatQuestionType = (type) => {
    return type
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('-');
  };

  // Alternar entre modo edición y visualización
  const handleEdit = () => {
    if (isEditing) {
      // Cancelar edición - salir del modo edición
      dispatch({
        type: 'SET_EDITING_QUESTION',
        payload: { questionId: null },
      });
      // Resetear estados locales al cancelar
      setWorkingText(question.question);
      setEditingOptionIndex(null);
      setEditingOptionText('');
    } else {
      // Entrar en modo edición - resetear estados para empezar limpio
      setWorkingText(question.question);
      setEditingOptionIndex(null);
      setEditingOptionText('');
      dispatch({
        type: 'SET_EDITING_QUESTION',
        payload: { questionId: question.id },
      });
    }
  };

  // Guardar el texto de la pregunta editada
  const handleSaveQuestionText = () => {
    if (workingText.trim() && workingText.trim() !== question.question) {
      dispatch({
        type: 'UPDATE_QUESTION_TEXT',
        payload: {
          id: question.id,
          newText: workingText.trim(),
        },
      });
    } else {
      // Si no hay cambios, simplemente salir del modo edición
      dispatch({
        type: 'SET_EDITING_QUESTION',
        payload: { questionId: null },
      });
    }
  };

  // Eliminar la pregunta
  const handleDelete = () => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this question?'
    );
    
    if (confirmDelete) {
      dispatch({
        type: 'DELETE_QUESTION',
        payload: { id: question.id },
      });
    }
  };

  // Agregar una nueva opción
  const handleAddOption = () => {
    if (newOptionText.trim()) {
      dispatch({
        type: 'ADD_OPTION_TO_QUESTION',
        payload: {
          questionId: question.id,
          optionText: newOptionText.trim(),
        },
      });
      setNewOptionText('');
    }
  };

  // Iniciar la edición de una opción específica
  const startEditingOption = (index, currentText) => {
    setEditingOptionIndex(index);
    setEditingOptionText(currentText);
  };

  // Guardar los cambios de una opción editada
  const saveOptionEdit = (index) => {
    if (editingOptionText.trim() && editingOptionText.trim() !== question.options[index]) {
      dispatch({
        type: 'UPDATE_OPTION_TEXT',
        payload: {
          questionId: question.id,
          optionIndex: index,
          newText: editingOptionText.trim(),
        },
      });
    }
    // Salir del modo edición de opción
    setEditingOptionIndex(null);
    setEditingOptionText('');
  };

  // Cancelar la edición de una opción
  const cancelOptionEdit = () => {
    setEditingOptionIndex(null);
    setEditingOptionText('');
  };

  // Eliminar una opción
  const handleDeleteOption = (optionIndex) => {
    if (question.options.length <= 2) {
      alert('Multiple choice questions must have at least 2 options');
      return;
    }
    
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this option?'
    );
    
    if (confirmDelete) {
      dispatch({
        type: 'DELETE_OPTION_FROM_QUESTION',
        payload: {
          questionId: question.id,
          optionIndex,
        },
      });
    }
  };

  return (
    <div className={`${styles['question-item']} ${isEditing ? styles['editing'] : ''}`}>
      {/* Header con tipo de pregunta y botones de acción */}
      <div className={styles['question-header']}>
        <span className={styles['question-type']}>
          {formatQuestionType(question.type)}
        </span>
        <div className={styles['question-actions']}>
          <button 
            className={`${styles['edit-btn']} ${isEditing ? styles['cancel-btn'] : ''}`}
            onClick={handleEdit}
          >
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
          <button 
            className={styles['delete-btn']} 
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>

      {/* Contenido de la pregunta - modo edición vs visualización */}
      {isEditing ? (
        <div className={styles['question-edit-form']}>
          <textarea
            value={workingText}
            onChange={(e) => setWorkingText(e.target.value)}
            className={styles['question-edit-input']}
            rows={3}
            placeholder="Enter question text..."
          />
          <div className={styles['edit-form-actions']}>
            <button 
              onClick={handleSaveQuestionText}
              className={styles['save-btn']}
              disabled={!workingText.trim()}
            >
              Save Question
            </button>
          </div>
        </div>
      ) : (
        <div className={styles['question-content']}>
          <h3>{question.question}</h3>
        </div>
      )}

      {/* Sección de opciones solo para preguntas de opción múltiple */}
      {question.type === QUESTION_TYPES.MULTIPLE_CHOICE && (
        <div className={styles['options-section']}>
          <h4>Answer Options:</h4>
          
          {isEditing ? (
            // Modo edición: cada opción puede editarse
            <div className={styles['options-edit-mode']}>
              {question.options.map((option, index) => (
                <div key={index} className={styles['option-edit-row']}>
                  {editingOptionIndex === index ? (
                    // Esta opción se está editando
                    <>
                      <input
                        type="text"
                        value={editingOptionText}
                        onChange={(e) => setEditingOptionText(e.target.value)}
                        className={styles['option-edit-input']}
                        placeholder={`Option ${index + 1}`}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            saveOptionEdit(index);
                          }
                        }}
                        autoFocus
                      />
                      <div className={styles['option-edit-actions']}>
                        <button
                          onClick={() => saveOptionEdit(index)}
                          className={styles['save-btn']}
                          disabled={!editingOptionText.trim()}
                        >
                          Save
                        </button>
                        <button
                          onClick={cancelOptionEdit}
                          className={styles['cancel-btn']}
                        >
                          Cancel
                        </button>
                      </div>
                    </>
                  ) : (
                    // Esta opción no se está editando - mostrar con botones
                    <>
                      <span className={styles['option-text']}>{option}</span>
                      <div className={styles['option-edit-actions']}>
                        <button
                          onClick={() => startEditingOption(index, option)}
                          className={styles['option-edit-btn']}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteOption(index)}
                          className={styles['option-delete-btn']}
                          disabled={question.options.length <= 2}
                          title={question.options.length <= 2 ? "Must keep at least 2 options" : "Delete option"}
                        >
                          Delete
                        </button>
                      </div>
                    </>
                  )}
                </div>
              ))}
              
              {/* Input para añadir nueva opción */}
              <div className={styles['add-option-row']}>
                <input
                  type="text"
                  value={newOptionText}
                  onChange={(e) => setNewOptionText(e.target.value)}
                  placeholder="New option text..."
                  className={styles['option-edit-input']}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleAddOption();
                    }
                  }}
                />
                <button
                  onClick={handleAddOption}
                  disabled={!newOptionText.trim()}
                  className={styles['add-option-btn']}
                >
                  + Add Option
                </button>
              </div>
            </div>
          ) : (
            // Modo visualización normal - solo mostrar las opciones
            <ul className={styles['options-list']}>
              {question.options.map((option, index) => (
                <li key={index} className={styles['option-item']}>
                  <span className={styles['option-text']}>{option}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}