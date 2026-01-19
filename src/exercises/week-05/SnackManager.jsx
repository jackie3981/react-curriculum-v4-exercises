import { useState } from 'react';
import SnackForm from './SnackForm';
import styles from './SnackManager.module.css';

export default function SnackManager() {
  const [snacks, setSnacks] = useState([
    { id: 1, name: 'Chocolate Chip Cookies', rating: 5 },
    { id: 2, name: 'Apple Slices', rating: 3 },
    { id: 3, name: 'Trail Mix', rating: 4 },
  ]);

  const [nextId, setNextId] = useState(4);
  const [editingSnack, setEditingSnack] = useState(null);

  function addSnack(name, rating) {
    const newSnack = {
      id: nextId,
      name: name.trim(),
      rating: parseInt(rating, 10),
    };
    setSnacks([...snacks, newSnack]);
    setNextId(nextId + 1);
  }

  function updateSnack(id, name, rating) {
    setSnacks(
      snacks.map((snack) =>
        snack.id === id
          ? { ...snack, name: name.trim(), rating: parseInt(rating, 10) }
          : snack
      )
    );
    setEditingSnack(null);
  }

  function deleteSnack(id) {
    setSnacks(snacks.filter((snack) => snack.id !== id));
    if (editingSnack && editingSnack.id === id) {
      setEditingSnack(null);
    }
  }

  function startEdit(snack) {
    setEditingSnack(snack);
  }

  function cancelEdit() {
    setEditingSnack(null);
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Snack Manager</h2>

      <SnackForm
        addSnack={addSnack}
        editingSnack={editingSnack}
        cancelEdit={cancelEdit}
        updateSnack={updateSnack}
        className={styles.exerciseArea}
      />

      <div className={styles.snacksSection}>
        <h3 className={styles.snacksTitle}>Current Snacks ({snacks.length})</h3>
        {snacks.length === 0 ? (
          <p className={styles.emptyMessage}>No snacks yet. Add one above!</p>
        ) : (
          <div className={styles.snacksList}>
            {snacks.map((snack) => (
              <div
                key={snack.id}
                className={`${styles.snackItem} ${editingSnack && editingSnack.id === snack.id ? styles.snackItemEditing : ''}`}
              >
                <div className={styles.snackInfo}>
                  <div className={styles.snackName}>{snack.name}</div>
                  <div className={styles.snackRating}>
                    Rating: {'⭐'.repeat(snack.rating)} ({snack.rating}/5)
                  </div>
                </div>
                <div className={styles.snackActions}>
                  <button
                    onClick={() => startEdit(snack)}
                    className={`${styles.actionButton} ${styles.editButton}`}
                    disabled={editingSnack !== null}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteSnack(snack.id)}
                    className={`${styles.actionButton} ${styles.deleteButton}`}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
