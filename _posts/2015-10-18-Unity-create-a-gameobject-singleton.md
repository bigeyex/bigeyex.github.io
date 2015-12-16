---
layout: post
title: Unity - create a GameObject Singleton
---

<div class="message">
This message is inspired by the Loom script.
</div>

Why use singleton Gameobject? You can keep your object globally unique while accessing features provided by Unity (such as Coroutines). This method also avoids attaching your script to a specific Gameobject in scene editor, provides flexibility, maintainability and convenience.

{% highlight csharp %}
public class MySingleton : MonoBehaviour
{
    
    private static MySingleton _current;
    public static MySingleton Current {
        get {
            Initialize ();
            return _current;
        }
    }
    
    void Awake ()
    {
        _current = this;
        initialized = true;
    }
    
    static bool initialized;
    
    static void Initialize ()
    {
        if (!initialized) {
        
            if (!Application.isPlaying)
                return;
            initialized = true;
            var g = new GameObject ("MySingleton");
            _current = g.AddComponent< MySingleton > ();
        }
            
    }
}
{% endhighlight %}