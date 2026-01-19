import styles from './SnackForm.module.css';

export default function SnackForm({
  addSnack,
  editingSnack,
  cancelEdit,
  updateSnack,
  className,
}) {
  const isEditing = Boolean(editingSnack);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const rating = formData.get('rating');

    if (isEditing) {
      updateSnack(editingSnack.id, name, rating);
    } else {
      addSnack(name, rating);
      e.target.reset();
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.form} ${className || ''}`}
    >
      <h3 className={styles.formTitle}>
        {isEditing ? '✏️ Edit Snack' : '➕ Add Snack'}
      </h3>

      <div className={styles.fieldContainer}>
        <label className={styles.fieldLabel}>Name:</label>
        <input
          type="text"
          name="name"
          defaultValue={isEditing ? editingSnack.name : ''}
          required
          className={styles.fieldInput}
          placeholder="Enter snack name"
        />
      </div>

      <div className={styles.fieldContainer}>
        <label className={styles.fieldLabel}>Rating:</label>
        <input
          type="number"
          name="rating"
          defaultValue={isEditing ? editingSnack.rating : ''}
          required
          min="1"
          max="5"
          className={styles.fieldInput}
          placeholder="Rate 1-5"
        />
      </div>

      <div className={styles.buttonContainer}>
        <button
          type="submit"
          className={`${styles.button} ${styles.submitButton}`}
        >
          {isEditing ? 'Save' : 'Add'}
        </button>

        {isEditing && (
          <button
            type="button"
            onClick={cancelEdit}
            className={`${styles.button} ${styles.cancelButton}`}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
