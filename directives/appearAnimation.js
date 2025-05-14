export default {
  mounted(el) {
    // 创建 IntersectionObserver
    const observer = new IntersectionObserver(
      ([entry], observer) => {
        if (entry.isIntersecting) {
          // 添加动画类
          el.classList.add('animate__animated', 'animate__fadeInUp')
          observer.unobserve(el) // 停止观察
        }
      },
      {
        threshold: 0.1, // 设置触发阈值
      },
    )

    // 观察元素
    observer.observe(el)
  },
}
