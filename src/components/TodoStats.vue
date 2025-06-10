<template>
  <div class="todo-stats">
    <div class="stat-item">
      <span class="stat-label">Total:</span>
      <span class="stat-value">{{ total }}</span>
    </div>
    <div class="stat-item">
      <span class="stat-label">Selesai:</span>
      <span class="stat-value">{{ completed }}</span>
    </div>
    <div class="stat-item">
      <span class="stat-label">Aktif:</span>
      <span class="stat-value">{{ active }}</span>
    </div>
    <div class="stat-item">
      <span class="stat-label">Progress:</span>
      <div class="progress-bar">
        <div 
          class="progress-fill"
          :style="{ width: `${progressPercentage}%` }"
        ></div>
      </div>
      <span class="stat-value">{{ progressPercentage }}%</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoStats',
  props: {
    total: {
      type: Number,
      required: true
    },
    completed: {
      type: Number,
      required: true
    },
    active: {
      type: Number,
      required: true
    }
  },
  computed: {
    progressPercentage() {
      if (this.total === 0) return 0
      return Math.round((this.completed / this.total) * 100)
    }
  }
}
</script>

<style scoped>
.todo-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  padding: 1rem;
  background-color: var(--white);
  border-radius: 6px;
  box-shadow: var(--shadow);
  margin: 1rem 0;
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.stat-label {
  font-size: 0.875rem;
  color: #666;
}

.stat-value {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-color);
}

.progress-bar {
  width: 100%;
  height: 8px;
  background-color: var(--border-color);
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background-color: var(--primary-color);
  transition: width 0.3s ease;
}
</style> 