sudo perf stat -e kmem:mm_page_pcpu_drain -e kmem:mm_page_alloc node ../index.js
