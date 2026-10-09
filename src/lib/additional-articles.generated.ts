import type { LocalArticle } from "./articles";
import slide1 from "../assets/winch/slide1.jpg";
import slide2 from "../assets/winch/slide2.jpg";
import slide3 from "../assets/winch/slide3.jpg";
import slide4 from "../assets/winch/slide4.jpg";

// Editorial pages grouped by location, roads, services, and driver safety.
const topics = [
  {
    "title": "ونش إنقاذ في حي أول الإسماعيلية",
    "slug": "rescue-hay-awal",
    "keyword": "حي أول الإسماعيلية",
    "group": "area"
  },
  {
    "title": "ونش إنقاذ في حي ثاني الإسماعيلية",
    "slug": "rescue-hay-thani",
    "keyword": "حي ثاني الإسماعيلية",
    "group": "area"
  },
  {
    "title": "ونش إنقاذ في حي ثالث الإسماعيلية",
    "slug": "rescue-hay-thaleth",
    "keyword": "حي ثالث الإسماعيلية",
    "group": "area"
  },
  {
    "title": "ونش إنقاذ في حي السلام بالإسماعيلية",
    "slug": "rescue-hay-salam",
    "keyword": "حي السلام",
    "group": "area"
  },
  {
    "title": "ونش إنقاذ قرب جامعة قناة السويس",
    "slug": "rescue-university-area",
    "keyword": "منطقة الجامعة",
    "group": "area"
  },
  {
    "title": "ونش إنقاذ في منطقة الإفرنج",
    "slug": "rescue-efreng",
    "keyword": "منطقة الإفرنج",
    "group": "area"
  },
  {
    "title": "ونش إنقاذ في العرايشية",
    "slug": "rescue-araysheya",
    "keyword": "العرايشية",
    "group": "area"
  },
  {
    "title": "ونش إنقاذ في أبو سلطان",
    "slug": "rescue-abu-sultan",
    "keyword": "أبو سلطان",
    "group": "area"
  },
  {
    "title": "ونش إنقاذ في فنارة",
    "slug": "rescue-fanara",
    "keyword": "فنارة",
    "group": "area"
  },
  {
    "title": "ونش إنقاذ في كسفريت",
    "slug": "rescue-kasfreet",
    "keyword": "كسفريت",
    "group": "area"
  },
  {
    "title": "ونش إنقاذ في الدفرسوار",
    "slug": "rescue-deversoir",
    "keyword": "الدفرسوار",
    "group": "area"
  },
  {
    "title": "ونش إنقاذ في سرابيوم",
    "slug": "rescue-sarabium",
    "keyword": "سرابيوم",
    "group": "area"
  },
  {
    "title": "ونش إنقاذ في نفيشة",
    "slug": "rescue-nafisha",
    "keyword": "نفيشة",
    "group": "area"
  },
  {
    "title": "ونش إنقاذ في القصاصين",
    "slug": "rescue-qassasin",
    "keyword": "القصاصين",
    "group": "area"
  },
  {
    "title": "ونش إنقاذ في الفردان",
    "slug": "rescue-fardan",
    "keyword": "الفردان",
    "group": "area"
  },
  {
    "title": "ونش إنقاذ في الضبعية",
    "slug": "rescue-dabeya",
    "keyword": "الضبعية",
    "group": "area"
  },
  {
    "title": "ونش إنقاذ في الحي الأول بالعاشر من رمضان",
    "slug": "rescue-tenth-hay-awal",
    "keyword": "الحي الأول بالعاشر من رمضان",
    "group": "area"
  },
  {
    "title": "ونش إنقاذ في المنطقة الصناعية بالعاشر من رمضان",
    "slug": "rescue-tenth-industrial",
    "keyword": "المنطقة الصناعية بالعاشر من رمضان",
    "group": "area"
  },
  {
    "title": "ونش إنقاذ على طريق الإسماعيلية القاهرة",
    "slug": "rescue-cairo-ismailia-road",
    "keyword": "طريق الإسماعيلية القاهرة",
    "group": "road"
  },
  {
    "title": "ونش إنقاذ على طريق الإسماعيلية السويس",
    "slug": "rescue-ismailia-suez-road",
    "keyword": "طريق الإسماعيلية السويس",
    "group": "road"
  },
  {
    "title": "ونش إنقاذ على طريق الإسماعيلية بورسعيد",
    "slug": "rescue-ismailia-portsaid-road",
    "keyword": "طريق الإسماعيلية بورسعيد",
    "group": "road"
  },
  {
    "title": "ونش إنقاذ على طريق الإسماعيلية الزقازيق الزراعي",
    "slug": "rescue-ismailia-zagazig-road",
    "keyword": "طريق الإسماعيلية الزقازيق الزراعي",
    "group": "road"
  },
  {
    "title": "ونش إنقاذ على طريق القنطرة العريش",
    "slug": "rescue-qantara-arish-road",
    "keyword": "طريق القنطرة العريش",
    "group": "road"
  },
  {
    "title": "ونش إنقاذ على طريق البحيرات",
    "slug": "rescue-lakes-road",
    "keyword": "طريق البحيرات",
    "group": "road"
  },
  {
    "title": "ونش إنقاذ عند أنفاق تحيا مصر",
    "slug": "rescue-tahya-misr-tunnels",
    "keyword": "أنفاق تحيا مصر",
    "group": "road"
  },
  {
    "title": "ونش إنقاذ على طريق المعاهدة",
    "slug": "rescue-treaty-road",
    "keyword": "طريق المعاهدة",
    "group": "road"
  },
  {
    "title": "ونش إنقاذ على الطريق الدائري للإسماعيلية",
    "slug": "rescue-ismailia-ring-road",
    "keyword": "الطريق الدائري للإسماعيلية",
    "group": "road"
  },
  {
    "title": "ونش إنقاذ على محور 30 يونيو",
    "slug": "rescue-june-30-axis",
    "keyword": "محور 30 يونيو",
    "group": "road"
  },
  {
    "title": "ونش إنقاذ على طريق الإسماعيلية العريش",
    "slug": "rescue-ismailia-arish-road",
    "keyword": "طريق الإسماعيلية العريش",
    "group": "road"
  },
  {
    "title": "ونش إنقاذ عند كوبري السلام",
    "slug": "rescue-peace-bridge",
    "keyword": "كوبري السلام",
    "group": "road"
  },
  {
    "title": "سطحة سيارات في الإسماعيلية",
    "slug": "flatbed-ismailia",
    "keyword": "سطحة سيارات الإسماعيلية",
    "group": "service"
  },
  {
    "title": "نقل السيارات من الإسماعيلية إلى القاهرة",
    "slug": "transport-ismailia-cairo",
    "keyword": "نقل سيارات الإسماعيلية القاهرة",
    "group": "service"
  },
  {
    "title": "نقل السيارات من القاهرة إلى الإسماعيلية",
    "slug": "transport-cairo-ismailia",
    "keyword": "نقل سيارات القاهرة الإسماعيلية",
    "group": "service"
  },
  {
    "title": "نقل السيارات بين المحافظات",
    "slug": "transport-between-governorates",
    "keyword": "نقل السيارات بين المحافظات",
    "group": "service"
  },
  {
    "title": "نقل السيارات الجديدة بدون تشغيل",
    "slug": "transport-new-cars",
    "keyword": "نقل السيارات الجديدة",
    "group": "service"
  },
  {
    "title": "نقل السيارات الفارهة والمنخفضة",
    "slug": "transport-luxury-low-cars",
    "keyword": "نقل السيارات الفارهة والمنخفضة",
    "group": "service"
  },
  {
    "title": "نقل سيارات الدفع الرباعي",
    "slug": "transport-4x4",
    "keyword": "نقل سيارات الدفع الرباعي",
    "group": "service"
  },
  {
    "title": "نقل السيارات الأوتوماتيك بأمان",
    "slug": "transport-automatic-cars",
    "keyword": "نقل السيارات الأوتوماتيك",
    "group": "service"
  },
  {
    "title": "نقل السيارات الكهربائية بأمان",
    "slug": "transport-electric-cars",
    "keyword": "نقل السيارات الكهربائية",
    "group": "service"
  },
  {
    "title": "ونش إنقاذ بعد الحوادث في الإسماعيلية",
    "slug": "accident-recovery-ismailia",
    "keyword": "ونش إنقاذ بعد الحوادث",
    "group": "service"
  },
  {
    "title": "إنقاذ السيارات الغارزة في الرمال",
    "slug": "sand-stuck-car-rescue",
    "keyword": "إنقاذ سيارة غارزة في الرمال",
    "group": "service"
  },
  {
    "title": "إنقاذ السيارات العالقة في الطين",
    "slug": "mud-stuck-car-rescue",
    "keyword": "إنقاذ سيارة عالقة في الطين",
    "group": "service"
  },
  {
    "title": "ونش إنقاذ للجراجات الضيقة",
    "slug": "tight-garage-rescue",
    "keyword": "ونش إنقاذ الجراجات الضيقة",
    "group": "service"
  },
  {
    "title": "ونش إنقاذ للسيارات منخفضة الارتفاع",
    "slug": "low-clearance-rescue",
    "keyword": "ونش إنقاذ السيارات المنخفضة",
    "group": "service"
  },
  {
    "title": "ونش إنقاذ سيارات على مدار 24 ساعة",
    "slug": "24-hour-rescue",
    "keyword": "ونش إنقاذ 24 ساعة الإسماعيلية",
    "group": "service"
  },
  {
    "title": "رقم ونش إنقاذ الإسماعيلية وطرق طلب الخدمة",
    "slug": "ismailia-rescue-phone",
    "keyword": "رقم ونش إنقاذ الإسماعيلية",
    "group": "service"
  },
  {
    "title": "نقل سيارة من المنزل إلى مركز الصيانة",
    "slug": "home-to-workshop-transport",
    "keyword": "نقل سيارة إلى مركز الصيانة",
    "group": "service"
  },
  {
    "title": "نقل سيارة من المعرض إلى العميل",
    "slug": "showroom-to-customer-transport",
    "keyword": "نقل سيارة من المعرض",
    "group": "service"
  },
  {
    "title": "ونش إنقاذ للشركات وأساطيل السيارات",
    "slug": "fleet-rescue-service",
    "keyword": "ونش إنقاذ للشركات",
    "group": "service"
  },
  {
    "title": "نقل سيارة لا تعمل نهائيًا",
    "slug": "non-running-car-transport",
    "keyword": "نقل سيارة لا تعمل",
    "group": "service"
  },
  {
    "title": "ماذا تفعل إذا تعطلت سيارتك على طريق سريع",
    "slug": "highway-breakdown-safety",
    "keyword": "تعطل السيارة على طريق سريع",
    "group": "guide"
  },
  {
    "title": "ماذا تفعل إذا ارتفعت حرارة المحرك",
    "slug": "engine-overheating",
    "keyword": "ارتفاع حرارة المحرك",
    "group": "guide"
  },
  {
    "title": "أسباب توقف السيارة فجأة",
    "slug": "car-stops-suddenly",
    "keyword": "أسباب توقف السيارة فجأة",
    "group": "guide"
  },
  {
    "title": "علامات ضعف بطارية السيارة",
    "slug": "weak-car-battery-signs",
    "keyword": "علامات ضعف البطارية",
    "group": "guide"
  },
  {
    "title": "ماذا تفعل عند ثقب الإطار على الطريق",
    "slug": "flat-tire-roadside",
    "keyword": "ثقب إطار السيارة على الطريق",
    "group": "guide"
  },
  {
    "title": "أسباب تعطل السيارة بعد المطر",
    "slug": "breakdown-after-rain",
    "keyword": "تعطل السيارة بعد المطر",
    "group": "guide"
  },
  {
    "title": "هل قطر السيارة بالحبل آمن",
    "slug": "rope-towing-safety",
    "keyword": "قطر السيارة بالحبل",
    "group": "guide"
  },
  {
    "title": "الفرق بين السطحة والونش التقليدي",
    "slug": "flatbed-vs-tow",
    "keyword": "الفرق بين السطحة والونش",
    "group": "guide"
  },
  {
    "title": "كيف تنقل سيارة بعد حادث",
    "slug": "transport-after-accident",
    "keyword": "نقل السيارة بعد حادث",
    "group": "guide"
  },
  {
    "title": "أخطاء شائعة عند سحب السيارات",
    "slug": "towing-mistakes",
    "keyword": "أخطاء سحب السيارات",
    "group": "guide"
  },
  {
    "title": "كيف تحمي سيارتك أثناء تحميلها على السطحة",
    "slug": "protect-car-flatbed",
    "keyword": "حماية السيارة أثناء التحميل",
    "group": "guide"
  },
  {
    "title": "خطوات السلامة عند انتظار ونش الإنقاذ",
    "slug": "roadside-waiting-safety",
    "keyword": "السلامة أثناء انتظار ونش",
    "group": "guide"
  },
  {
    "title": "ماذا تضع في حقيبة طوارئ السيارة",
    "slug": "car-emergency-kit",
    "keyword": "حقيبة طوارئ السيارة",
    "group": "guide"
  },
  {
    "title": "كيف تستعد لرحلة طويلة بالسيارة",
    "slug": "long-trip-car-checklist",
    "keyword": "فحص السيارة قبل السفر",
    "group": "guide"
  },
  {
    "title": "كيف تتصرف إذا تعطلت السيارة ليلًا",
    "slug": "night-breakdown",
    "keyword": "تعطل السيارة ليلًا",
    "group": "guide"
  },
  {
    "title": "ماذا تفعل إذا تعطلت السيارة ومعك أطفال",
    "slug": "breakdown-with-children",
    "keyword": "تعطل السيارة مع أطفال",
    "group": "guide"
  },
  {
    "title": "كيف تنقل سيارة بعجل تالف",
    "slug": "damaged-wheel-transport",
    "keyword": "نقل سيارة بعجل تالف",
    "group": "guide"
  },
  {
    "title": "متى تحتاج إلى تحميل السيارة بالكامل",
    "slug": "full-loading-needed",
    "keyword": "متى تحتاج سطحة كاملة",
    "group": "guide"
  },
  {
    "title": "كيف تتأكد من تكلفة نقل السيارة قبل التحميل",
    "slug": "confirm-transport-cost",
    "keyword": "تكلفة نقل السيارة",
    "group": "guide"
  },
  {
    "title": "كيف تختار ورشة بعد نقل السيارة",
    "slug": "choose-repair-workshop",
    "keyword": "اختيار ورشة بعد نقل السيارة",
    "group": "guide"
  },
  {
    "title": "كيف تتصرف إذا تعطلت السيارة في طريق زراعي",
    "slug": "rural-road-breakdown",
    "keyword": "تعطل السيارة على طريق زراعي",
    "group": "guide"
  },
  {
    "title": "متى لا يجب تشغيل السيارة بعد العطل",
    "slug": "when-not-to-restart",
    "keyword": "متى لا تشغل السيارة بعد العطل",
    "group": "guide"
  },
  {
    "title": "كيف تتعامل مع عطل الفتيس الأوتوماتيك",
    "slug": "automatic-gearbox-breakdown",
    "keyword": "عطل الفتيس الأوتوماتيك",
    "group": "guide"
  },
  {
    "title": "كيف تتعامل مع دخان صادر من السيارة",
    "slug": "smoke-from-car",
    "keyword": "دخان من السيارة",
    "group": "guide"
  },
  {
    "title": "كيف تتصرف عند تسرب سوائل من السيارة",
    "slug": "car-fluid-leak",
    "keyword": "تسرب سوائل السيارة",
    "group": "guide"
  },
  {
    "title": "كيف تطلب ونش من موقعك على الخريطة",
    "slug": "share-location-for-tow",
    "keyword": "طلب ونش من الموقع",
    "group": "guide"
  },
  {
    "title": "الفرق بين السحب والتحميل الكامل للسيارة",
    "slug": "towing-vs-full-loading",
    "keyword": "السحب أم التحميل الكامل",
    "group": "guide"
  },
  {
    "title": "كيف تستعد لوصول ونش الإنقاذ",
    "slug": "prepare-for-tow",
    "keyword": "الاستعداد لوصول ونش الإنقاذ",
    "group": "guide"
  }
] as const;
const covers = [slide1, slide2, slide3, slide4];

function buildSections(title: string, keyword: string, group: string) {
  const local = group === "area";
  const road = group === "road";
  const service = group === "service";
  return [
    { heading: local ? "تحديد موقع السيارة بدقة" : road ? "تحديد مكان العطل على الطريق" : service ? "اختيار الخدمة المناسبة" : "أول خطوات التصرف وقت العطل", paragraphs: [
      local ? `لو محتاج ${keyword}، اذكر اسم المنطقة والشارع أو أقرب علامة واضحة، وابعت الموقع المباشر لو متاح. وصف عام للمكان ممكن يسبب تأخير، خصوصًا في الشوارع الجانبية أو المناطق المتشابهة.` : road ? `لو العربية تعطلت على ${title.replace("ونش إنقاذ على ","")}، حدّد اتجاه سيرك وأقرب مخرج أو تقاطع أو محطة، وشارك الموقع المباشر. اسم الطريق وحده مش كفاية لتحديد مكانك بدقة.` : service ? `قبل طلب ${keyword}، وضّح نوع السيارة وموديلها وهل بتدور وهل العجلات سليمة. التفاصيل دي تساعد في اختيار طريقة نقل مناسبة بدل تجربة سحب ممكن تسبب ضررًا إضافيًا.` : `عند حدوث عطل مفاجئ، حاول الوصول إلى مكان آمن فقط إذا كان تحريك السيارة ممكنًا دون مخاطرة، وشغّل إشارات الانتظار. لا تقف خلف السيارة أو في مسار المرور، ولا تبدأ إصلاحًا على جانب طريق سريع.`,
      "اتفق على نقطة الاستلام والوجهة المطلوبة قبل بدء النقل، واطلب تأكيد التكلفة وأي رسوم إضافية بوضوح."
    ] },
    { heading: "السلامة قبل أي محاولة إصلاح", paragraphs: [
      "سلامتك وسلامة الركاب أهم من إعادة تشغيل السيارة بسرعة. إذا كان المكان غير آمن، ابتعدوا عن حركة المرور واتبعوا تعليمات الجهات المختصة عند الحاجة. لا تقفوا بين السيارة والطريق ولا تحاولوا دفعها في مسار السيارات.",
      "إذا ظهر دخان أو تسريب واضح أو ارتفعت حرارة المحرك، أوقف السيارة في موضع آمن وأطفئ المحرك عندما يكون ذلك ممكنًا. لا تفتح غطاء نظام التبريد والمحرك ساخن، ولا تعاود تشغيل السيارة إذا كنت تشك في دخول المياه للمحرك."
    ], bullets: ["حدد الموقع والاتجاه بدقة.", "اذكر نوع السيارة وحالة العجلات.", "وضح إن كانت السيارة بعد حادث أو بها تلف ظاهر.", "اتفق على الوجهة والتكلفة قبل التحميل."] },
    { heading: local ? "معلومات تساعد على الوصول داخل المنطقة" : road ? "معلومات تساعد على الوصول" : service ? "ما الذي يجب الاتفاق عليه قبل التحميل" : "معلومات تقولها عند طلب ونش", paragraphs: [
      "جهّز بيانات مختصرة عن السيارة: النوع والموديل، طبيعة الأعراض، وهل ناقل الحركة أو العجلات فيها مشكلة. مش مطلوب منك تشخّص العطل بنفسك؛ اشرح اللي لاحظته فقط.",
      "إذا كان المكان ضيقًا أو الطريق غير ممهد أو السيارة منخفضة أو دفعًا رباعيًا، اذكر ذلك من البداية. لا تفترض أن كل أنواع الأوناش مناسبة لكل الحالات، واسأل عن طريقة التحميل الملائمة قبل بدء العمل."
    ] },
    { heading: "التواصل مع ونش العمار", paragraphs: [
      "للاستفسار عن إمكانية المساعدة، تواصل مع ونش العمار على 01206188884، أو 01206188883 للمساعدة على الطرق. اذكر موقعك ونوع السيارة والوجهة المطلوبة، واطلب تأكيد توفر الخدمة والوقت المتوقع قبل الاعتماد عليه.",
      "وقت الوصول والتكلفة يتغيران حسب الموقع وحركة المرور ونوع السيارة وصعوبة التحميل والمسافة. لذلك لا تعتمد على سعر ثابت أو وقت مضمون من غير تأكيد مباشر، واحتفظ بمقتنياتك المهمة قبل نقل السيارة."
    ] }
  ];
}

export const additionalArticles: LocalArticle[] = topics.map((topic, index) => ({
  slug: topic.slug,
  title: topic.title,
  seoTitle: topic.title + " | ونش العمار",
  description: topic.title + ". دليل عملي لتحديد الموقع والتصرف بأمان واختيار طريقة نقل السيارة المناسبة والتواصل مع ونش العمار.",
  keyword: topic.keyword,
  cover: covers[index % covers.length],
  intro: topic.title + ". يقدم هذا الدليل خطوات عملية للتعامل مع العطل وتجهيز المعلومات المهمة وتجنب المخاطر قبل وصول المساعدة.",
  sections: buildSections(topic.title, topic.keyword, topic.group),
}));
